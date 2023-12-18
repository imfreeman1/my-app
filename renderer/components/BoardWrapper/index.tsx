import Link from 'next/link';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { QueryCache } from 'react-query';
import Title from '../Title';
import SearchBar from '../SearchBar';
import MessageBoard from '../MessageBoard';
import { selectorOptType } from './type';
import { boardListAtom } from '../../recoil/board';
import { useBoardQuery } from '../../queries/useBoardQuery';

function BoardWrapper() {
  const [selectorOption, setSelectorOption] = useState<selectorOptType>(null);
  const setBoardList = useSetRecoilState(boardListAtom);
  const testing = useBoardQuery(setBoardList);
  const queryCache = new QueryCache({
    onError: (error) => {
      console.log('in error', error);
    },
    onSuccess: (data) => {
      console.log('in succes', data);
    },
  });

  const query = queryCache.find({ queryKey: ['boardList'] });
  console.log('query', query);
  console.log('test', testing);
  return (
    <section className="h-11/12 grid grid-cols-4 gap-5 pb-28">
      <div className=" col-start-2 col-span-2 mt-20 flex flex-col min-h-1/2">
        <Title className="text-4xl text-center">게시판</Title>
        <SearchBar setSelectorOption={setSelectorOption} />
        <MessageBoard selectorOption={selectorOption} />

        <div className="flex justify-end gap-5 mr-3">
          <Link href="/board/write">글쓰기</Link>
        </div>
      </div>
    </section>
  );
}

export default BoardWrapper;
