import { Avatar, Container, colors } from '@mui/material';
import styled from 'styled-components';
import LinkedInIcon from '../../../../assets/icons/LinkedIn.Icon';
import { unit } from '../../../../shared/units';
import { color } from '../../../../shared/color';

export const IntroContainer = styled(Container)`
	width: 100%;
	height: 500px;
	margin: 450px;

`;

export const AvatarContainer = styled(Container)`
	filter: drop-shadow(0 0 0.75rem);
`;

export const Name = styled.h1`
	font-family: 'Kaushan Script', cursive;
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

export const Title = styled.h2`
	padding: 0;
	margin: 0;
	color: ${color.blue300};
`;
