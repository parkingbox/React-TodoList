import React from "react";
import styled from "styled-components";
import {
  CancelButton,
  CompleteButton,
  DeleteButton,
  H1,
  Todo,
  Wrapper,
  Wrappers,
} from "./style";

function TodoList({ todos, setTodos }) {
  function completeBtn(id) {
    setTodos(
      todos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, done: true };
        }
        return todos;
      })
    );
  }

  function deleteBtn(index) {
    setTodos(todos.filter((item) => item.id !== index));
  }

  function cancelBtn(id) {
    setTodos(
      todos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, done: false };
        }
        return todos;
      })
    );
  }

  return (
    <Wrappers>
      <H1>Working.. 🔥</H1>
      <Wrapper>
        {todos
          .filter((item) => item.done !== true)
          .map((item) => {
            return (
              <Todo key={item.id}>
                <h2>{item.title}</h2>
                <h4>{item.content}</h4>
                <DeleteButton onClick={() => deleteBtn(item.id)}>
                  삭제
                </DeleteButton>
                <CompleteButton onClick={() => completeBtn(item.id)}>
                  완료
                </CompleteButton>
              </Todo>
            );
          })}
      </Wrapper>
      <H1>Done..🎉</H1>
      <Wrapper>
        {todos
          .filter((item) => item.done === true)
          .map((item) => {
            return (
              <Todo key={item.id}>
                <h2>{item.title}</h2>
                <h4>{item.content}</h4>
                <DeleteButton onClick={() => deleteBtn(item.id)}>
                  삭제
                </DeleteButton>
                <CancelButton onClick={() => cancelBtn(item.id)}>
                  취소
                </CancelButton>
              </Todo>
            );
          })}
      </Wrapper>
    </Wrappers>
  );
}

export default TodoList;
