import React from 'react';
import { useRecoilState } from 'recoil';
import Button from '../Button';
import { calAtom, calStringAtom } from '../../recoil/calculator';
import { BTN_LIST } from '../../constants/btnConstants/btnConstants';
import { STRING_CONSTANT } from '../../constants/basicConstants/basicConstants';

function NumBtn() {
  const [count, setCount] = useRecoilState(calAtom);
  const [countString, setCountString] = useRecoilState(calStringAtom);
  const onClick = (inputNum: string) => {
    if (count === STRING_CONSTANT.zero && inputNum !== STRING_CONSTANT.dot) {
      setCount(inputNum);
    } else {
      setCount(count + inputNum);
    }
    if (
      countString === STRING_CONSTANT.empty &&
      count !== STRING_CONSTANT.zero
    ) {
      setCountString(count + inputNum);
    } else {
      setCountString(countString + inputNum);
    }
  };

  return (
    <ul className="grid grid-cols-3 grid-rows-4 gap-1">
      {BTN_LIST.num.map((btn) => (
        <li className={`${btn === '0' ? 'col-span-2' : ''}`} key={btn}>
          <Button
            type="button"
            className="btn-darkGray"
            onClick={() => onClick(btn)}
          >
            {btn}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default NumBtn;
