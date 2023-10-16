// import { Grid } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import { SkillsetContainer } from "./skillset.component.styles";
import {
  BlueText,
  Description,
  H1,
  H2,
  Hero,
} from "../../../../shared/styles/elements.styles";
import { RevealInView } from "../../../../shared/animations/reveal-in-view.animation";

const SkillsetComponent = () => {
  return (
    <>
      {/* <RevealInView> */}
        <SkillsetContainer>
          {/* <a href="#skillset"></a> */}
          <Grid
            container
            justifyContent="center"
            columns={30}
            // columnGap={"sm"}
            spacing={2}
            gap={3}
            gridTemplateColumns={"repeat(2, 1fr)"}
            margin={"auto"}
            // border={"1px solid red"}
            // borderColor={"red"}
          >
            <Grid item xs={10} margin={"auto 0 "}>
              <BlueText>MY SKILLSET</BlueText>
              <H2>
                {/* Graphic Design, Interface Design & User Experience */}
                Full Stack Development, Database Management, and UI/UX Design
              </H2>
            </Grid>
            <Grid item xs={14}>
              <Container>
                <Description>
                  I have specialized in Full Stack Development, which have
                  taught me the both the front-end, and back-end of web. With a
                  wide range of projects under my belt, I have gained the needed
                  experience to build any project from scratch.
                  <br />
                  <br />
                  Past projects of my include: <br />
                  <ul>
                    <li>
                      Internal Full Stack tools for the company I work for
                    </li>
                    <li>
                      Backend SaaS payments service, which handles customers
                      monthly payments
                    </li>
                    <li>
                      Media Bank for a company, which allows users to upload
                      Media Kits, and Press Releases for the public to view
                    </li>
                  </ul>
                </Description>
              </Container>
            </Grid>
          </Grid>
        </SkillsetContainer>
      {/* </RevealInView> */}
    </>
  );
};

export default SkillsetComponent;
