import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Button from '../Button';
import { calAtom, calStringAtom } from '../../recoil/calculator';
import { GRAY_BTN_METHOD } from '../../constants/btnConstants/btnConstants';

// 나중엔 배열 풀자.

function GrayOptBtn() {
  const [count, setCount] = useRecoilState(calAtom);

  const setCountString = useSetRecoilState(calStringAtom);

  return (
    <ul className="grid grid-cols-3 gap-1">
      {Object.entries(GRAY_BTN_METHOD).map((entry) => {
        const [content, method] = entry;
        return (
          <li key={content}>
            <Button
              type="button"
              className="btn-gray"
              onClick={() => method(setCount, setCountString, count)}
            >
              {content}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default GrayOptBtn;
