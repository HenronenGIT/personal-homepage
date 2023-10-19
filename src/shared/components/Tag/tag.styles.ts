import styled from 'styled-components';
import { unit } from '../../units';
import { color } from '../../color';

export const TagContainer = styled.div`
	display: flex;
	width: fit-content;
	height: fit-content;
	flex-direction: row;
	background-color: ${color.blue700};
	border-radius: 9999px;
	padding: ${unit.p2} ${unit.p3};
	justify-content: center;
`;
