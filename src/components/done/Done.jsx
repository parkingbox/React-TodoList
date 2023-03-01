import React from "react";
import {
  CancelButton,
  DeleteButton,
  H1,
  Todo,
  Wrapper,
} from "../todoList/style";

function Done({ todos, deleteBtn, cancelBtn }) {
  return (
    <>
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
    </>
  );
}

export default Done;
