import React from "react";
import styled from "styled-components";

// interface FlexProps extends React.ClassAttributes<HTMLDivElement> {
interface FlexProps {
  children: React.ReactNode;
  direction: "row" | "column";
}

const Wrapper = styled.div<FlexProps>`
  display: "flex";
  flex-direction: ${(props) => props.direction};
`;

export const Flex = ({
  children,
  direction = "column",
  ...rest
}: FlexProps) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};
