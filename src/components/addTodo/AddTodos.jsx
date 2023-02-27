import List from "components/todoList/TodoList";
import React, { useState } from "react";
import styled from "styled-components";
import { AddTodoWrapper, Button, Input, InputForm, Label } from "./style";



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
