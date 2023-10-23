import { AppBar } from '@mui/material';
import styled from 'styled-components';
import { unit } from '../../shared/units';
import { color } from '../../shared/color';

export const NavBarContainer = styled.div`
	display: flex;
	width: 100%;
	position: fixed;
	top: 0;
	flex-direction: row;
	/* padding-left: ${unit.p5}; */
	padding: 0 ${unit.p2} 0 ${unit.p2};
	justify-content: space-between;
	align-items: 'center';
	align-content: 'center';

	border: 1px solid ${color.gray300};
`;

export const LinksContainer = styled.div`
	display: flex;
	position: relative;
	gap: ${unit.gp3};

	/* flex-direction: row; */
	/* justify-content: space-between; */
	/* right: 0; */
`;
