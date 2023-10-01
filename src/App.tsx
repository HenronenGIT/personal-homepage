// import { Route, Routes } from "react-router";
// import { Button } from "@mui/material";
import { Routes, Route } from "react-router";
// import "./App.css";
import HomeView from "./views/Home/HomeView/Home.view";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavBarComponent from "./components/NavBar/nav-bar.component";

const App = () => {
  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
};

export default App;
