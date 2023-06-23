import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Divider } from "@mui/material";
import Header from './components/ContainerHeader'
import Main from './components/ContainerMain'
import Footer from './components/ContainerFooter';

class App extends Component {

  render (){
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Divider/>
          <Main />
        </main>
        <footer>       
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
