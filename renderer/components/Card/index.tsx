import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const { TextArea } = Input;

const Card = ({ className }) => {
  const [text, setText] = useState("");
  const inputChange = (e) => {
    setText(e.target.value);
  };
  const textAreaChange = () => {};
  return (
    <>
      <div className="flex flex-col items-center bg-baseGray rounded-md p-3 h-fit">
        <div className="p-2">
          <h1 className="text-black text-xl">할 일</h1>
        </div>
        <div className="w-fit">
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="제목">
              <Input className="w-auto" onChange={inputChange} />
            </Form.Item>
            <Form.Item label="내용">
              <TextArea cols={18} rows={4} />
            </Form.Item>
            <div className="flex justify-around">
              <Button type="primary" htmlType="submit">
                완료
              </Button>
              <Button>취소</Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="bg-baseGray row-start-6">
        <div>
          <h1 className="text-xl text-black">진행 중</h1>
        </div>
        <ul>
          <li>
            <div className="bg-baseWhite text-black">
              <Input type="checkbox" className="w-8" />
              <span>text</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
