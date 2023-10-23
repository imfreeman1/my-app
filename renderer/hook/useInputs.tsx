import { useState } from "react";

const useInputs = <T extends {}>(inputType: T): [T, Function, Function] => {
  const [inputs, setInputs] = useState(inputType);
  console.log(inputs);
  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs((state) => ({ ...state, [name]: value }));
  };

  const cancelHandler = (nextState: T) => {
    setInputs(nextState);
  };

  return [inputs, onChange, cancelHandler];
};

export default useInputs;
