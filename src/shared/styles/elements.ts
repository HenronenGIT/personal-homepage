import styled from 'styled-components';
import { color } from '../color';
import { unit } from '../units';
import { Link } from 'react-scroll';

export const SectionContainer = styled.div``;

export const BlueText = styled.h4`
	color: ${color.blue300};
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
	font-family: 'Kaushan Script', cursive;
`;

export const StyledLink = styled(Link)`
	cursor: pointer;
	color: ${color.gray100};
	text-transform: uppercase;
	border-bottom: 1px solid ${color.platform_blue};
	padding: ${unit.p3} ${unit.p3} ${unit.p3} 0;

	transition: all 0.5s;
	&:hover {
		color: ${color.gray400};
		padding-left: 10px;
	}
`;
