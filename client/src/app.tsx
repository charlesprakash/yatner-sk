import * as React from 'react';
import './app.css';

import Todos from './components/todos';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
