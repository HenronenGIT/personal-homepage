import React from "react";
import styled from "styled-components";

interface GridProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
}

const Wrapper = styled.div<GridProps>`
  display: "flex";
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  flex-direction: ${(props) => props.direction};
`;

export const Grid = ({ children, ...rest }: GridProps) => {
  return (
    <Wrapper
      marginLeft={rest.marginLeft}
      marginRight={rest.marginRight}
      padding={rest.padding}
    >
      {children}
    </Wrapper>
  );
};
