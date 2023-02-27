import React from "react";
import styled from "styled-components";

const Headers = styled.div`
  border: solid 1px lightgrey;
  border-radius: 5px;
  padding: 20px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H2 = styled.h2``;
const H3 = styled.h3``;

function Header() {
  return (
    <Headers>
      <H2>My Todo List</H2>
      <H3>React</H3>
    </Headers>
  );
}

export default Header;
