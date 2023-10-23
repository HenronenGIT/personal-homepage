// import { Grid } from "@mui/material";
import { Container, Grid, Typography } from '@mui/material';
import { SkillsetContainer } from './skillset.component.styles';
import { RevealInView } from '../../../../shared/animations/reveal-in-view.animation';
import { BlueText } from '../../../../shared/styles/elements';
import { Description, H2 } from '../../../../shared/styles/typography';
import { Element } from 'react-scroll';

const SkillsetComponent = () => {
	return (
		<>
			{/* <RevealInView> */}
			<Element name='skillset' className='element'>
				<SkillsetContainer>
					{/* <a href="#skillset"></a> */}
					<Grid
						container
						justifyContent='center'
						columns={30}
						// columnGap={"sm"}
						spacing={2}
						gap={3}
						gridTemplateColumns={'repeat(2, 1fr)'}
						margin={'auto'}
						// border={"1px solid red"}
						// borderColor={"red"}
					>
						<Grid item xs={10} margin={'auto 0 '}>
							<BlueText>MY SKILLSET</BlueText>
							<H2>
								{/* Graphic Design, Interface Design & User Experience */}
								Full Stack Development, Database Management, and UI/UX Design
							</H2>
						</Grid>
						<Grid item xs={14}>
							<Container>
								<Description>
									I have specialized in Full Stack Development, which have taught me the both the
									front-end, and back-end of web. With a wide range of projects under my belt, I
									have gained the needed experience to build any project from scratch.
									<br />
									<br />
									Past projects of my include: <br />
									<ul>
										<li>Internal Full Stack tools for the company I work for</li>
										<li>Backend SaaS payments service, which handles customers monthly payments</li>
										<li>
											Media Bank for a company, which allows users to upload Media Kits, and Press
											Releases for the public to view
										</li>
									</ul>
								</Description>
							</Container>
						</Grid>
					</Grid>
				</SkillsetContainer>
			</Element>

			{/* </RevealInView> */}
		</>
	);
};

export default SkillsetComponent;
// // import { Grid } from "@mui/material";
// import { Grid } from '@mui/material';
// import { unit } from '../../../../shared/units';
// import { SectionDescription, SectionTitle } from './skillset.component.styles';
// import LinkedInIcon from '../../../../assets/icons/LinkedIn.Icon';
// import Tag from '../../../../shared/components/Tag/Tag';
// import { Column } from '../../../../shared/layouts/Column/Column';
// import DatabaseIcon from '../../../../assets/icons/Database.icon';

// const SkillsetComponent = () => {
// 	return (
// 		<>
// 			{/* <SkillsetContainer> */}
// 			<Grid gridTemplateColumns={3} container justifyContent={'space-evenly'} gap={unit.gp3}>
// 				<Grid item xs={3}>
// 					{/* <DatabaseIcon /> */}
// 					<SectionTitle>Frontend</SectionTitle>
// 					<SectionDescription>
// 						I value simple content structure, clean design patterns, and thoughtful interactions.
// 					</SectionDescription>
// 					<Tag>React</Tag>
// 					<Tag>Styled Components</Tag>
// 				</Grid>
// 				<Grid item xs={3}>
// 					<SectionTitle>Backend</SectionTitle>
// 					<SectionDescription>
// 						I value simple content structure, clean design patterns, and thoughtful interactions.
// 					</SectionDescription>
// 					<Column direction='column' justifyContent='space-between'>
// 						<Tag>node.js</Tag>v<Tag>Express</Tag>
// 					</Column>
// 				</Grid>
// 				<Grid item xs={3}>
// 					<SectionTitle>Tools</SectionTitle>
// 					<SectionDescription>
// 						I value simple content structure, clean design patterns, and thoughtful interactions.
// 					</SectionDescription>
// 				</Grid>
// 			</Grid>
// 			{/* </SkillsetContainer> */}
// 			{/* </RevealInView> */}
// 		</>
// 	);
// };

// export default SkillsetComponent;
