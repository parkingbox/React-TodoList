import styled from "styled-components";

export const Wrappers = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  min-width: 240px;
`;

export const H1 = styled.h1``;

export const Todo = styled.div`
  margin-right: 10px;
  padding: 5px;
  width: 240px;
  border: 3px solid rgb(67, 134, 125);
  border-radius: 5px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #da2638;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;
export const CompleteButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #2b7cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;
export const CancelButton = styled.button`
  cursor: pointer;
  margin: 0px 10px 0px 10px;
  width: 40%;
  background-color: #5c636a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  :hover {
    scale: 1.1;
  }
`;
