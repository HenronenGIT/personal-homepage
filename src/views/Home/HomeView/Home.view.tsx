// import { Grid } from "@mui/material";
import { Container, Grid, TableRow, Typography } from "@mui/material";
import {} from "./home.styles";
import IntroComponent from "./IntroComponent/Intro.component";
import SkillsetComponent from "./SkillsetComponent/skillset.component";
import CareerComponent from "./CareerComponent/career.component";
import ContactComponent from "./ContactComponent/contact.component";

const HomeView = () => {
  return (
    <>
      <IntroComponent />
      <hr />
      <SkillsetComponent />
      <hr />
      <CareerComponent />
      <hr />
      <ContactComponent />
    </>
  );
};

export default HomeView;
