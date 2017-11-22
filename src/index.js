import React from 'react';
import {render} from 'react-dom';
import 'TestCss/index.css';
 
class App extends React.Component {
  render () {
    return <p className="testClass"> demo yarn - react - webpack </p>;
  }
}

render(<App/>, document.getElementById('app'));