import styled from "styled-components";
import { unit } from "../units";
import { catchAllProps } from "./utils";

export const Grid = styled.div<catchAllProps>`
  display: grid;
  /* grid-template-columns: ; */
  grid-template-columns: ${(props) => props.gridTemplateColumns};
`;
