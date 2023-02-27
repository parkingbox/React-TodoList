import Form from "components/addTodo/AddTodos";
import Header from "components/header/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
function Layout() {
  return (
    <Wrapper>
      <Header />
      <Form />
    </Wrapper>
  );
}

export default Layout;
