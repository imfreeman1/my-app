import { ChangeEvent, useState } from 'react';

export interface UseInputParamType {
  [inputType: string]: string;
}
interface OnChangeType {
  ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}
interface CancelHandlerType {
  (nextState: UseInputParamType): void;
}
interface UseInputType {
  (
    inputType: UseInputParamType,
  ): [UseInputParamType, OnChangeType, CancelHandlerType];
}
const useInputs: UseInputType = (inputType) => {
  const [inputs, setInputs] = useState(inputType);
  const onChange: OnChangeType = ({ target }) => {
    const { name, value } = target;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  const cancelHandler: CancelHandlerType = (nextState) => {
    setInputs(nextState);
  };

  return [inputs, onChange, cancelHandler];
};

export default useInputs;
