// import { Grid } from "@mui/material";
import { Container, Grid, TableRow, Typography } from '@mui/material';
import {} from './home.styles';
import IntroComponent from './IntroComponent/Intro.component';
import React from 'react';
import SkillsetComponent from './SkillsetComponent/skillset.component';
import ContactComponent from './ContactComponent/contact.component';
import CareerComponent from './CareerComponent/career.component';
import QuoteComponent from './QuoteComponent/quote.component';

const HomeView = () => {
	return (
		<>
			<IntroComponent />

			<hr />
			{/* <QuoteComponent /> */}

			<SkillsetComponent />
			<hr />
			<CareerComponent />
			<hr />
			<ContactComponent />
		</>
	);
};

export default HomeView;
