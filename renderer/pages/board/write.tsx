import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import { useMutation } from 'react-query';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { findBoardItem, lastIndexBoardItem } from '../../recoil/board';
import { BulletinType } from '../../recoil/board/type';
import makeDateString from '../../utils/dateUtils';
import timeStringMaker from '../../utils/timeUtils';
import db from '../../firebase';
import useInputs, { UseInputParamType } from '../../hook/useInputs';

function Write() {
  const router = useRouter();
  const modifyID = router.query.id as string;
  const findItem = useRecoilValue(findBoardItem(modifyID));
  const initInputs: UseInputParamType = findItem
    ? { title: findItem.title, content: findItem.content }
    : { title: '', content: '' };
  const [inputs, onChange] = useInputs(initInputs);
  const { title, content } = inputs;
  const lastIndex = useRecoilValue(lastIndexBoardItem);
  const backButtonHandler = (id: string) => {
    if (!id) {
      router.replace('/board');
      return;
    }
    router.replace(`/board/read/${id}`);
  };
  const onSubmit = async () => {
    try {
      if (findItem) {
        const { id } = findItem;
        await updateDoc(doc(db, 'board', id), {
          title,
          content,
        });
      }
      if (!findItem) {
        const id = uuidv4();
        const newBulletin: BulletinType = {
          index: lastIndex + 1,
          id,
          title,
          content,
          date: makeDateString(),
          time: timeStringMaker(),
          count: 0,
        };
        await setDoc(doc(db, 'board', id), newBulletin);
      }

      router.replace('/board');
    } catch (error) {
      throw new Error(error);
    }
  };
  const { mutate } = useMutation(onSubmit);

  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div className="flex justify-center mt-20 col-start-2 col-span-2 w-full">
        <div className="py-5 px-7 border-2 border-black rounded-xl h-fit bg-white text-black">
          <form className="flex flex-col gap-5" onSubmit={() => mutate()}>
            <label htmlFor="input">
              <span>제목</span>
              <Input
                name="title"
                value={title}
                id="input"
                type="text"
                className="w-full mt-3 border-2 border-gray-300 rounded-md px-3 py-1 bg-white"
                onChange={(e) => onChange(e)}
              />
            </label>
            <textarea
              name="content"
              onChange={(e) => onChange(e)}
              value={content}
              className="resize-none mt-3 overflow-auto border-2 border-gray-300 rounded-md py-2 px-3 bg-white"
              rows={12}
              cols={60}
            />
          </form>
          <div className="flex justify-evenly w-full mt-2">
            <Button
              type="submit"
              className="btn-blue"
              disabled={!(title && content)}
            >
              완료
            </Button>
            <Button
              className=""
              type="button"
              onClick={() => backButtonHandler(modifyID)}
            >
              뒤로
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Write;
