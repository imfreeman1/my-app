import React, { useState } from "react";
import { Form, Input } from "antd";
import Button from "../Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo";
import { defaultTodoType } from "../../recoil/todo/type";
import { v4 as uuidv4 } from "uuid";
const { TextArea } = Input;

const AntForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todoList = useRecoilValue(todoListAtom);
  const setTodo = useSetRecoilState(todoListAtom);
  const inputChange = ({ target }) => {
    setTitle(target.value);
  };
  const textareaChange = ({ target }) => {
    setContent(target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    const todo: defaultTodoType = {
      id: uuidv4(),
      title,
      content,
      isCompleted: false,
    };
    setTitle("");
    setContent("");
    setTodo([...todoList, todo]);
  };
  const cancelHandler = () => {
    console.log("test", title.length, content.length);
    setTitle("");
    setContent("");
  };

  return (
    <div className="w-fit">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="제목">
          <Input className="w-auto" onChange={inputChange} value={title} />
        </Form.Item>
        <Form.Item label="내용">
          <TextArea
            onChange={textareaChange}
            cols={18}
            rows={4}
            value={content}
          />
        </Form.Item>
        <div className="flex justify-around">
          <Button
            className="btn-blue"
            type="submit"
            onClick={submitTodo}
            disabled={title.length && content.length ? false : true}
          >
            {"완료"}
          </Button>
          <Button
            className="nav-btn"
            type="button"
            onClick={cancelHandler}
            disabled={title.length || content.length ? false : true}
          >
            {"취소"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AntForm;
