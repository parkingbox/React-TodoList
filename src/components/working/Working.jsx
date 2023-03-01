import React from "react";
import {
  CompleteButton,
  DeleteButton,
  H1,
  Todo,
  Wrapper,
} from "../todoList/style";

function Working({ todos, deleteBtn, completeBtn }) {
  return (
    <>
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
    </>
  );
}

export default Working;
