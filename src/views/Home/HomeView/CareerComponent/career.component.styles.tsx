import { Container } from "@mui/material";
import styled from "styled-components";
import { H3, Span } from "../../../../shared/styles/elements.styles";
import { color } from "../../../../shared/color";

export const SkillsetContainer = styled(Container)`
  margin: 0 auto 0 auto;
`;

export const ComapnyTitle = styled(H3)`
  position: relative;
  left: -16px;
  height: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 1px;
  padding-bottom: 3px;
  padding-left: 17px;
  /* border-right: 1px solid #e43434; */
  border-left: 1px solid #6f9bf1;
  /* color: #fff; */
  line-height: 10px;
`;

export const DateSpan = styled(Span)`
  color: ${color.gray400};
`;
