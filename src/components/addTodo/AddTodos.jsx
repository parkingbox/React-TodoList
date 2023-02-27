import List from "components/todoList/TodoList";
import React, { useState } from "react";
import styled from "styled-components";

const AddTodoWrapper = styled.div`
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-weight: bolder;
  padding: 0px 20px 0px 20px;
  margin-top: 10px;
  border-radius: 5px;
`;
const InputForm = styled.form`
  border: none;
  border-radius: 10px;
  margin: 20px;
`;
const Label = styled.label``;
const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
`;
const Button = styled.button`
  background-color: rgb(67, 134, 125);
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  color: white;
  font-weight: bold;
`;

function Form() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부",
      content: "삽질의 연속",
      done: false,
    },
    {
      id: 2,
      title: "리액트 공부",
      content: "리팩토링하기",
      done: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const inputChange = (e) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setContent(e.target.value);
  };

  const addBtn = (e) => {
    const newTodos = {
      id: todos.length + 1,
      title,
      content,
      done: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <AddTodoWrapper>
        <InputForm>
          <Label>제목</Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={inputChange}
          />
          <Label>내용</Label>
          <Input
            type="text"
            name="body"
            value={content}
            onChange={inputChange}
          />
        </InputForm>

        <Button onClick={addBtn}>추가하기</Button>
      </AddTodoWrapper>
      <>
        <List
          title={title}
          content={content}
          todos={todos}
          setTodos={setTodos}
        ></List>
      </>
    </>
  );
}

export default Form;
