import React, { useEffect, useRef } from 'react';
import { Form, Input, InputRef } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import Button from '../Button';
import { DefaultTodoType } from '../../recoil/todo/type';
import db from '../../firebase';
import useInputs from '../../hook/useInputs';
import { todoListAtom } from '../../recoil/todo';

const { TextArea } = Input;

interface InitInputType {
  title: string;
  content: string;
}

const initState: InitInputType = {
  title: '',
  content: '',
};

function AntForm() {
  const [inputs, onChange, cancelHandler] = useInputs(initState);
  const { title, content } = inputs;
  const inputRef = useRef<InputRef>(null);
  const setTodoState = useSetRecoilState(todoListAtom);
  const submitTodo = async () => {
    const id = uuidv4();
    const todo: DefaultTodoType = {
      id,
      title,
      content,
      isCompleted: false,
    };
    setTodoState((s) => [...s, todo]);
    cancelHandler(initState);
    setDoc(doc(db, 'todos', id), todo);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { mutate } = useMutation(submitTodo);

  return (
    <div className="w-fit">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="제목">
          <Input
            className="w-auto"
            ref={inputRef}
            name="title"
            onChange={(e) => onChange(e)}
            value={title}
          />
        </Form.Item>
        <Form.Item label="내용">
          <TextArea
            name="content"
            onChange={(e) => onChange(e)}
            cols={18}
            rows={4}
            value={content}
            style={{ resize: 'none' }}
          />
        </Form.Item>
        <div className="flex justify-evenly">
          <Button
            className="btn-blue active:border-white"
            type="submit"
            onClick={() => mutate()}
            disabled={!(title && content)}
          >
            완료
          </Button>
          <Button
            className="btn-white"
            type="button"
            onClick={() => cancelHandler(initState)}
            disabled={!(title || content)}
          >
            취소
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AntForm;
