import styled from "styled-components";

export const AddTodoWrapper = styled.div`
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

export const InputForm = styled.form`
  border: none;
  border-radius: 10px;
  margin: 20px;
`;
export const Label = styled.label``;
export const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
`;
export const Button = styled.button`
  background-color: rgb(67, 134, 125);
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  :hover{
    scale: 1.1;
  }
`;
