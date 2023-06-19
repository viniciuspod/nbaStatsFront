import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="ContainerHeader">
          <div className="ContainerLogo">
            <a className="Logo" href="/home">NbaStats</a>
          </div>  
          <div className="ContainerNav">
            <nav>
              <ul>
                <li><a href="/players">Players</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/games">Games</a></li>
                <li><a href="/averages">Averages</a></li>
              </ul>
            </nav>
          </div>        
        </div>
      </header>
    </div>
  );
}

export default App;
