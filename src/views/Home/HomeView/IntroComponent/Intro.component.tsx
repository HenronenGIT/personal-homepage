// import { Grid } from "@mui/material";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { IntroContainer, AvatarContainer } from "./intro.component.styles";
import MeImage from "../../../../assets/img/me.jpg";
import { Description } from "../../../../shared/styles/elements.styles";

const IntroComponent = () => {
  return (
    <>
      <IntroContainer>
        <h1>Intro Component</h1>
        <Grid
          container
          justifyContent="center"
          columns={30}
          // columnGap={"sm"}
          spacing={2}
          gap={3}
          gridTemplateColumns={"repeat(2, 1fr)"}
          // borderColor={"red"}
          // border={"1px solid red"}
        >
          <Grid item xs={10}>
            {/* <Container> */}
              <Typography variant="h4">Hello, it's me</Typography>
            {/* </Container> */}
            <Container>
              {/* <Typography variant="subtitle1"> */}
              <Description>
                An enthusiastic product designer currently shaping the future of
                software development by designing smooth user-interfaces that
                promote user interaction with information and data. While
                traveling around the world.
              </Description>
            </Container>
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
    </>
  );
};

export default IntroComponent;
