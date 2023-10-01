import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

const NavBarComponent = () => {
  return (
    <>
      {/* <AppBar position="static"> */}
      <AppBar position="static" color="transparent">
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
