// import { Grid } from "@mui/material";
import { Avatar, Grid, Typography } from '@mui/material';
import GitHubIcon from '../../../../assets/icons/GitHub.Icon';
import MeImage from '../../../../assets/img/me.jpg';
import { MY_GITHUB_URL, MY_LINKEDIN_URL } from '../../../../config/constants';
import { color } from '../../../../shared/color';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import {
	AvatarContainer,
	IntroContainer,
	LinksContainer,
	Name,
	StyledLinkedinIcon,
	Title,
} from './intro.component.styles';
import { Description } from '../../../../shared/styles/typography';
import { BorderButton } from '../../../../components/BorderButton/Border.button';
import { StyledLink } from '../../../../shared/styles/elements';
import { unit } from '../../../../shared/units';

// const descriptionText = `     I'm dedicated full stack developer with a passion for building Web
// applications with a modern technologies. I thrive in a team
// environment and enjoy working on a variety of projects. I am
// always open for opportunities to learn and grow as a developer. If
// I am not coding, you can find me either from the gym lifting
// weights, somewhere with a camera on my hand or reading a
// non-fiction when I commute to the office.`;

const descriptionText = `
  Full stack developer with a passion for building Web applications with modern technologies.

`;

const IntroComponent = () => {
	return (
		<>
			<IntroContainer>
				<Grid
					columns={2}
					container
					direction={'row'}
					justifyContent='center'
					spacing={2}
					gridTemplateColumns={'repeat(2, 1fr)'}
				>
					<Grid item xs={1} margin={'auto 0'}>
						{/* <Typography color={color.gray600} variant='h5'>
							Hello, it's me
						</Typography> */}
						<Name>Henri Maronen</Name>
						<Title>Full Stack Developer</Title>
						<Description>{descriptionText}</Description>
						<LinksContainer>
							<a href={MY_LINKEDIN_URL} target='_blank'>
								<StyledLinkedinIcon />
							</a>
							<a href={MY_GITHUB_URL} target='_blank'>
								<GitHubIcon />
							</a>
						</LinksContainer>
					</Grid>

					<Grid item xs={1}>
						<AvatarContainer>
							{/* <RevealAnimation duration={animation.d3}> */}
							<Avatar alt='Henri' src={MeImage} sx={{ width: 400, height: 400 }} />
							{/* </RevealAnimation> */}
						</AvatarContainer>
					</Grid>
				</Grid>

				<StyledLink to='skillset' smooth={true} duration={1000}>
					Skillset
				</StyledLink>
			</IntroContainer>
		</>
	);
};

export default IntroComponent;
