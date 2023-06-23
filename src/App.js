import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./components/Players";

import { Divider, Switch } from "@mui/material";
import Header from "./components/ContainerHeader";
import Main from "./components/ContainerMain";
import Footer from "./components/ContainerFooter";
import { Route, Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/players" > 
                <Players />
              </Route>
            </Switch>
            <Divider />
            <Main />
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
