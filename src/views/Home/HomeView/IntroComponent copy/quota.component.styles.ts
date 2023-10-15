import { Avatar, Container } from "@mui/material";
import styled from "styled-components";
import LinkedInIcon from "../../../../assets/icons/LinkedIn.Icon";
import { unit } from "../../../../shared/units";

export const IntroContainer = styled(Container)`
  margin: 0 auto 0 auto;
`;

export const AvatarContainer = styled(Container)`
  filter: drop-shadow(0 0 0.75rem);
`;

export const Name = styled.h1`
  padding: 0;
  margin: 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  gap: ${unit.gp3};
  /* justify-content: space-between; */
  /* align-content: left; */
  width: 100%;
`;

export const StyledLinkedinIcon = styled(LinkedInIcon)`
  cursor: pointer;
`;
