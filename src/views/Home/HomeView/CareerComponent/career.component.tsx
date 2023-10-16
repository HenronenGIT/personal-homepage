// import { Grid } from "@mui/material";
import { Box, Container, Grid, TableRow, Typography } from '@mui/material';
import {
	CareerContainer,
	ComapnyTitle,
	DateSpan,
	SkillsetContainer,
} from './career.component.styles';
import { Description, P, SectionTitle } from '../../../../shared/styles/elements.styles';
import { RevealInView } from '../../../../shared/animations/reveal-in-view.animation';
import { BorderButton } from '../../../../components/BorderButton/Border.button';
import LinkedInIcon from '../../../../assets/icons/LinkedIn.Icon';
import { unit } from '../../../../shared/units';

const careerElements = [
	{
		company: 'Hive Helsinki',
		title: 'Student',
		date: 'Feb 2019',
	},
	{
		company: 'Slush',
		title: 'Full Stack Developer',
		date: 'Feb 2019',
	},
];

const CareerComponent = () => {
	const renderElements = () => {
		return careerElements.map((element, index) => {
			return (
				<Grid
					item
					key={index}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'left',
						justifyContent: 'center',
					}}
				>
					<ComapnyTitle>{element.company}</ComapnyTitle>
					<Description>{element.title}</Description>
					<DateSpan>{element.date}</DateSpan>
				</Grid>
			);
		});
	};

	return (
		<>
			{/* <RevealInView duration={2}> */}
				{/* <CareerContainer> */}
				{/* <span>test</span> */}
				<Box display={'flex'} flexDirection={'row'}>
					<SectionTitle>Career</SectionTitle>
					{/* <Description>Career</Description> */}
					<BorderButton icon={<LinkedInIcon />}>Career</BorderButton>
				</Box>
				<Grid
					container
					justifyContent='center'
					columns={30}
					spacing={2}
					gap={3}
					gridTemplateColumns={'repeat(2, 1fr)'}
					margin={'auto'}
				>
					{renderElements()}
				</Grid>
				{/* </CareerContainer> */}
			{/* </RevealInView> */}
		</>
	);
};

export default CareerComponent;
