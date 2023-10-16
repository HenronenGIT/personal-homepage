// import { Grid } from "@mui/material";
import { Avatar, Button, Container, Grid, Typography } from '@mui/material';
import {
	IntroContainer,
	AvatarContainer,
	Name,
	LinksContainer,
	StyledLinkedinIcon,
	Title,
} from './intro.component.styles';
import MeImage from '../../../../assets/img/me.jpg';
import { Description, Hero } from '../../../../shared/styles/elements.styles';
import { RevealAnimation } from '../../../../shared/animations/reveal.animation';
import { MY_LINKEDIN_URL, MY_GITHUB_URL } from '../../../../config/constants';
import GitHubIcon from '../../../../assets/icons/GitHub.Icon';
import { unit } from '../../../../shared/units';
import { RevealFromTopAnimation } from '../../../../shared/animations/reveal-top.animation';
import { animation } from '../../../../shared/animation';
import { color } from '../../../../shared/color';

// const descriptionText = `     I'm dedicated full stack developer with a passion for building Web
// applications with a modern technologies. I thrive in a team
// environment and enjoy working on a variety of projects. I am
// always open for opportunities to learn and grow as a developer. If
// I am not coding, you can find me either from the gym lifting
// weights, somewhere with a camera on my hand or reading a
// non-fiction when I commute to the office.`;

const descriptionText = `
  Full stack developer with a passion for building Web applications with a modern technologies.

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
						<Typography color={color.gray600} variant='h5'>
							Hello, it's me
						</Typography>
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
			</IntroContainer>
		</>
	);
};

export default IntroComponent;
