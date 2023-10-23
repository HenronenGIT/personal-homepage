import { AppBar, Toolbar } from '@mui/material';
import { Name } from '../../shared/styles/elements';
import { LinksContainer, NavBarContainer } from './nav-bar.component.styles';
import { Link } from 'react-scroll';

const links = [
	{
		label: 'Intro',
		value: 'intro',
		path: '#intro',
		to: 'skillset',
		smooth: true,
		duration: 1000,
	},
	{
		label: 'Skillset',
		value: 'Skillset',
		path: '#skillset',
		to: 'skillset',
		smooth: true,
		duration: 1000,
	},
	{
		label: 'Career',
		value: 'career',
		to: 'career',
		smooth: true,
		duration: 1000,
	},
	// {
	// 	label: 'Career',
	// 	value: '#career',
	// 	to: 'skillset',
	// 	smooth: true,
	// 	duration: 1000,
	// },
];

const NavBarComponent = () => {
	const renderLinks = () => (
		<>
			{links.map((link) => (
				<Link to={link.to} smooth={link.smooth} duration={link.duration}>
					{link.label}
				</Link>
			))}
		</>
	);

	return (
		<>
			<NavBarContainer>
				<Name>Henri Maronen</Name>
				<LinksContainer>{renderLinks()}</LinksContainer>
			</NavBarContainer>
		</>
	);
};
export default NavBarComponent;
