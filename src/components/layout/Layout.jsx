import AddTodos from "components/addTodo/AddTodos";
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
      <AddTodos />
    </Wrapper>
  );
}

export default Layout;
