import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import './normalize.css';
import './App.css';

import Weather from './containers/todayWeatherController/Loadable';
import Analysis from './containers/dataAnalysisController/Loadable';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-left">
            <ul className="list-menu">
              <li><Link to="/analysis">Data Analysis</Link></li>
              <li><Link to="/weather">Today's weather</Link></li>
            </ul>
          </div>
          <div className="App-right">
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/weather" component={Weather} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
