import { useRouter } from "next/router";
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRecoilState } from "recoil";
import { boardListAtom } from "../../recoil/board";
import { v4 as uuidv4 } from "uuid";
import { BulletinType } from "../../recoil/board/type";
import makeDateString from "../../utils/dateUtils";
import timeStringMaker from "../../utils/timeUtils";

const Write = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [boardList, setBoardList] = useRecoilState(boardListAtom);
  const onChange = ({ target }, callBack: Function) => {
    callBack(target.value);
  };
  const onclick = () => {
    router.back();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newBulletin: BulletinType = {
      index: boardList.length + 1,
      id: uuidv4(),
      title,
      content,
      date: makeDateString(),
      time: timeStringMaker(),
      count: 0,
    };
    setBoardList([newBulletin, ...boardList]);
    router.back();
  };
  return (
    <section className="h-screen grid grid-cols-4 gap-5">
      <div className="flex justify-center mt-20 col-start-2 col-span-2 w-full">
        <div className="py-5 px-7 border-2 border-black rounded-xl h-fit bg-white text-black">
          <form className="flex flex-col gap-5">
            <label>
              <span>제목</span>
              <Input
                value={title}
                type={"text"}
                className="w-full mt-3 border-2 border-gray-300 rounded-md px-3 py-1 bg-white"
                onChange={(e) => onChange(e, setTitle)}
              />
            </label>
            <textarea
              onChange={(e) => onChange(e, setContent)}
              value={content}
              className="resize-none mt-3 overflow-auto border-2 border-gray-300 rounded-md py-2 px-3 bg-white"
              rows={12}
              cols={60}
            />
          </form>
          <div className="flex justify-evenly w-full mt-2">
            <Button onClick={onSubmit} type="button" className="btn-blue">
              완료
            </Button>
            <Button type="button" onClick={onclick}>
              back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Write;
