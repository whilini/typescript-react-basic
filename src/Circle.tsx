import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 20px solid ${(props) => props.borderColor};
  align-items: center;
  justify-content: center;
  display: flex;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [value, setValue] = useState(0);
  setValue(2);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "cadetblue"}>
      {text}
    </Container>
  );
};

export default Circle;
