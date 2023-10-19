import { Container } from '@mui/material';
import styled from 'styled-components';
import { color } from '../../../../shared/color';
import { H3, Span } from '../../../../shared/styles/typography';


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

export const CareerContainer = styled.div`
	position: relative;
	margin: auto;
	display: block;
	width: 100%;
	/* margin: 0 auto 0 auto; */
	/* margin-left: auto; */
	margin-right: auto;
	align-items: center;
	justify-content: center;
	justify-items: center;
	justify-self: center;
	/* height: 800px; */
`;
