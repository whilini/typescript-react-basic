import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const Btn = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  padding: 10px 20px;
  border-radius: 7px;
  border: none;
  color: ${(props) => props.theme.textColor};
`;

const App = () => {
  return (
    <Container>
      <H1>POTATO</H1>
      <Btn>BOONG!</Btn>
    </Container>
  );
};

export default App;
