// import { Grid } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import {
  ComapnyTitle,
  DateSpan,
  SkillsetContainer,
} from "./career.component.styles";
import {
  BlueText,
  Description,
  H3,
  P,
  SectionContainer,
  SectionTitle,
  Span,
} from "../../../../shared/styles/elements.styles";
import { color } from "../../../../shared/color";
import SectionWrapper from "../../../../components/SectionWrapper/section.wrapper";
import { unit } from "../../../../shared/units";
import { RevealInView } from "../../../../shared/animations/reveal-in-view.animation";

const careerElements = [
  {
    company: "Hive Helsinki",
    position: "Student",
    date: "Feb 2019",
  },
  {
    company: "Slush",
    position: "Full Stack Developer",
    date: "Feb 2019",
  },
];

const CareerComponent = () => {
  const renderElements = () => {};

  return (
    <>
      <RevealInView duration={2}>
        <SectionTitle>Career</SectionTitle>
        <Grid
          container
          justifyContent="center"
          columns={30}
          spacing={2}
          gap={3}
          gridTemplateColumns={"repeat(3, 1fr)"}
          margin={"auto"}
        >
          <Grid item>
            {/* <CareerElement /> */}
            <Container>
              {/* <H3>Hive Helsinki</H3> */}
              <ComapnyTitle>Hive Helsinki</ComapnyTitle>
              <Description>Student</Description>
              {/* Student */}
            </Container>
            <P>Feb 2019</P>
          </Grid>
          <Grid item>
            <Container>
              {/* <H3>Slush</H3> */}
              <ComapnyTitle>Slush</ComapnyTitle>
              <Description>Full Stack Developer</Description>
              {/* //TODO make grayer */}
              <P>Feb 2019</P>
              {/* <DateSpan>Feb 2019</DateSpan> */}
            </Container>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </RevealInView>
    </>
  );
};

export default CareerComponent;
