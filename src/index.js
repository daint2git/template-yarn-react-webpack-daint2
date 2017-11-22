import React from 'react';
import {render} from 'react-dom';
 
class App extends React.Component {
  render () {
    return <p> demo yarn - react - webpack </p>;
  }
}

render(<App/>, document.getElementById('app'));