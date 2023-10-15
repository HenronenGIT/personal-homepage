import styled from "styled-components";
import { ColumnProps } from "./Column";

export const Wrapper = styled.div<ColumnProps>`
  display: "flex";
  width: 100%;
  
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  flex-direction: ${(props) => props.direction};
`;