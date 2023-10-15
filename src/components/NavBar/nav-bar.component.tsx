import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { NavBarContainer } from "./nav-bar.component.styles";

const NavBarComponent = () => {
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        style={{ marginBottom: "100px" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Henri Maronen
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBarComponent;
