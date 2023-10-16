import styled from "styled-components";
import { color } from "../color";
import { unit } from "../units";

export const SectionContainer = styled.div``;

export const BlueText = styled.h4`
  color: ${color.blue300}
`;

export const Description = styled.p`
  color: ${color.gray300};
`;

export const SectionTitle = styled.h2`
  color: ${color.gray100};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const H1 = styled.h1`
  color: ${color.gray100};
  margin: 0;
  /* font-size: 1.5rem; */
  /* font-weight: 700; */
  /* margin-bottom: 1rem; */
`;

export const H2 = styled.h2`
  color: ${color.gray100};
  margin: 0;
  /* font-size: 1.5rem; */
  /* font-weight: 700; */
  /* margin-bottom: 1rem; */
`;
export const H3 = styled.h3`
  color: ${color.gray100};
  margin: 0;
  /* font-size: 1.5rem; */
  /* font-weight: 700; */
  /* margin-bottom: 1rem; */
`;

export const P = styled.p`
  margin: 0;
  padding: ${unit.p2};
  /* font-size: 1.5rem; */
  /* font-weight: 700; */
  /* margin-bottom: 1rem; */
`;
export const Span = styled.span`
  color: ${color.gray100};
`;

export const Hero = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 500px;
  @media screen {
  }
`;

export const Name = styled.h2`
  font-family: "Kaushan Script", cursive;
`;
