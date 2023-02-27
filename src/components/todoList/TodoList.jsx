import React from "react";
import styled from "styled-components";

const Wrappers = styled.div``;
const Wrapper = styled.div`
  display: flex;
  min-width: 240px;
`;
const H1 = styled.h1``;
const Todo = styled.div`
  margin-right: 10px;
  padding: 5px;
  width: 240px;
  border: 3px solid rgb(67, 134, 125);
  border-radius: 5px;
`;
const DeleteButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #da2638;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
`;
const CompleteButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #2b7cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
`;
const CancelButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #5c636a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
`;

function List({ todos, setTodos }) {
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
  function deleteBtn(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
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

export default List;
