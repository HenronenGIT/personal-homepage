import styled from 'styled-components';
import { color } from '../../shared/color';

export const ButtonContainer = styled.a`
	cursor: pointer;
	border: solid 1px ${color.gray100};
	/* display: flex; */
	/* border-bottom: 1px solid ${color.blue200}; */

	/* margin-top: 18px; */
	/* padding-left: 0px; */
	/* align-items: center;v */
	/* border-left: 2px none #689af8; */
	/* background-color: transparent; */
	/* -webkit-transition: all 508ms cubic-bezier(0.77, 0, 0.175, 1); */
	/* transition: all 508ms cubic-bezier(0.77, 0, 0.175, 1); */
	/* font-size: 11px; */
	/* letter-spacing: 4px; */
	text-transform: uppercase;
`;

export const ButtonTextContainer = styled.div`
	color: ${color.gray100};
	&:hover {
		color: ${color.gray300};
	}
`;
