import React from "react";
import styled from "styled-components";
import Done from "../done/Done";
import {
  CancelButton,
  CompleteButton,
  DeleteButton,
  H1,
  Todo,
  Wrapper,
  Wrappers,
} from "./style";
import Working from "../working/Working";

function TodoList({ todos, setTodos }) {
  function completeBtn(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return { ...todo };
      })
    );
  }
  function deleteBtn(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <Wrappers>
      <Working todos={todos} deleteBtn={deleteBtn} completeBtn={completeBtn} />
      <Done todos={todos} deleteBtn={deleteBtn} cancelBtn={completeBtn} />
    </Wrappers>
  );
}

export default TodoList;
