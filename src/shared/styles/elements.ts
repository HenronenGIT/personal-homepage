import styled from 'styled-components';
import { color } from '../color';
import { unit } from '../units';

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
