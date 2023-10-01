// import { Grid } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import { SkillsetContainer } from "./skillset.component.styles";
import {
  BlueText,
  Description,
} from "../../../../shared/styles/elements.styles";

const SkillsetComponent = () => {
  return (
    <>
      <h1>Skillset Component</h1>
      <SkillsetContainer>
        <Grid
          container
          justifyContent="center"
          columns={30}
          // columnGap={"sm"}
          spacing={2}
          gap={3}
          gridTemplateColumns={"repeat(2, 1fr)"}
          // border={"1px solid red"}
          // borderColor={"red"}
        >
          <Grid item xs={10}
          // border={"1px solid red"} borderColor={"red"}
          >
            <BlueText>MY SKILLSET</BlueText>
            <Typography variant="h4">
              Graphic Design, Interface Design & User Experience
            </Typography>
          </Grid>
          <Grid
            item
            xs={14}
            // border={"1px solid red"} borderColor={"red"}
          >
            <Container>
              {/* <Typography variant="subtitle2"></Typography> */}
              <Description>
                I specialize in building complex web applications, leading
                front-end teams, digital product design and developing visual
                design systems. I enjoy creating effortless user experience and
                designing delightful digital products. The entire process of
                going from a concept to release and gathering user’s feedback on
                either client’s or my own products is what makes me wake up
                everyday! I worked with numerous clients from all around the
                world from early startups to well-established companies. I
                always seek new opportunities for cooperation on projects around
                interesting dashboards, design systems or landing pages. Let’s
                create something awesome together!
              </Description>
            </Container>
          </Grid>
        </Grid>
      </SkillsetContainer>
    </>
  );
};

export default SkillsetComponent;
