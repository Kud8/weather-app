import React, { Component } from 'react';
import './App.scss';
import WeatherListContainer from './containers/WeatherListContainer'
import ButtonContainer from './containers/ButtonContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonContainer />
        <WeatherListContainer />
      </div>
    );
  }
}

export default App;
