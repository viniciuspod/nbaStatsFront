import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/ContainerHeader'
import Main from './components/ContainerMain'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
