import React, { useState } from "react";
import { Form, Input } from "antd";
import Button from "../Button";
import { defaultTodoType } from "../../recoil/todo/type";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useMutation } from "react-query";

const { TextArea } = Input;

const AntForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const inputChange = ({ target }) => {
    setTitle(target.value);
  };
  const textareaChange = ({ target }) => {
    setContent(target.value);
  };
  const submitTodo = async () => {
    const id = uuidv4();
    const todo: defaultTodoType = {
      id,
      title,
      content,
      isCompleted: false,
    };
    setTitle("");
    setContent("");
    await setDoc(doc(db, "todos", id), todo);
  };
  const cancelHandler = () => {
    setTitle("");
    setContent("");
  };
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
          <Input className="w-auto" onChange={inputChange} value={title} />
        </Form.Item>
        <Form.Item label="내용">
          <TextArea
            onChange={textareaChange}
            cols={18}
            rows={4}
            value={content}
            style={{ resize: "none" }}
          />
        </Form.Item>
        <div className="flex justify-evenly">
          <Button
            className="btn-blue"
            type="submit"
            onClick={() => mutate()}
            disabled={title && content ? false : true}
          >
            {"완료"}
          </Button>
          <Button
            className="btn-white"
            type="button"
            onClick={cancelHandler}
            disabled={title || content ? false : true}
          >
            {"취소"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AntForm;
