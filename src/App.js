import React, { Component } from "react";
import "./App.css";
import Header from "./components/ContainerHeader";
import Home from "./pages/home/Home";
import Footer from "./components/ContainerFooter";
import Players from "./pages/players/Players";
import Teams from "./pages/teams/Teams"
import Averages from "./pages/averages/Averages";
import Games from "./pages/games/Games"
import Stats from "./pages/stats/Stats";

import { Divider } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div  style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor:"#1A202C"}}>
          <header>
            <Header />
          </header>
          <main style={{ flex: 1 }}>
            <Divider sx={{backgroundColor:"#fff"}} />
            <Routes>
              <Route path="/players" element={<Players />}></Route>
              <Route path="/teams" element={<Teams />}></Route>
              <Route path="/teams/:id" element={<Teams />}></Route>
              <Route path="/averages" element={<Averages />}></Route>
              <Route path="/games" element={<Games />}></Route>
              <Route path="/stats" element={<Stats />}></Route>
              <Route path="/stats/:id" element={<Stats />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
