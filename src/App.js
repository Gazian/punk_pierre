import React from 'react';
import './App.css';
import BeerContainer from './containers/BeerContainer'

function App() {
  return (
    <div className='App'>
      <h1>Punk-Pierre</h1>
      <div>
      <h2 className='BeerHeads'>Mmmm...Beer</h2>
        <h3>
          <BeerContainer />
        </h3>
   
      </div>
    </div>
  );
}

export default App;
