// import { Grid } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import {} from "./home.styles";
import IntroComponent from "./IntroComponent/Intro.component";
import SkillsetComponent from "./SkillsetComponent/skillset.component";

const HomeView = () => {
  return (
    <>
      <IntroComponent />
      <SkillsetComponent />
    </>
  );
};

export default HomeView;
