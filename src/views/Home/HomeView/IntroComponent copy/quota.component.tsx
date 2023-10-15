// import { Grid } from "@mui/material";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import {
  IntroContainer,
  AvatarContainer,
  Name,
  LinksContainer,
  StyledLinkedinIcon,
} from "./quota.component.styles";
import MeImage from "../../../../assets/img/me.jpg";
import { Description, Hero } from "../../../../shared/styles/elements.styles";
import LinkedInIcon from "../../../../assets/icons/LinkedIn.Icon";
import { Reveal } from "../../../../shared/animations/reveal.animation";
import { MY_LINKEDIN_URL, MY_GITHUB_URL } from "../../../../config/constants";
import GitHubIcon from "../../../../assets/icons/GitHub.Icon";
import { unit } from "../../../../shared/units";

const IntroComponent = () => {
  return (
    <>
      <Hero>
        <Reveal>
          {/* <h1>
          test
        </h1> */}

          <IntroContainer>
            <Grid
              container
              justifyContent="center"
              columns={30}
              spacing={2}
              gap={3}
              gridTemplateColumns={"repeat(2, 1fr)"}
            >
              <Grid item xs={10} margin={"auto 0"}>
                <Typography variant="h5">Hello, it's me</Typography>
                <Name>Henri</Name>
                <Description>
                  I'm dedicated full stack developer with a passion for building
                  Web applications with a modern technologies. I thrive in a
                  team environment and enjoy working on a variety of projects. I
                  am always open for opportunities to learn and grow as a
                  developer. If I am not coding, you can find me either from the
                  gym lifting weights, somewhere with a camera on my hand or
                  reading a non-fiction when I commute to the office.
                </Description>
                <LinksContainer>
                  <a href={MY_LINKEDIN_URL} target="_blank">
                    <StyledLinkedinIcon />
                  </a>
                  <a href={MY_GITHUB_URL} target="_blank">
                    <GitHubIcon />
                  </a>
                </LinksContainer>
              </Grid>

              <Grid item md={10}>
                <AvatarContainer>
                  <Avatar
                    alt="Henri"
                    src={MeImage}
                    sx={{ width: 400, height: 400 }}
                  />
                </AvatarContainer>
              </Grid>
            </Grid>
          </IntroContainer>
        </Reveal>
      </Hero>
    </>
  );
};

export default IntroComponent;
