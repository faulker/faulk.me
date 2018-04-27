import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

class App extends Component {
  render () {
    return (
      <RaisedButton label="Default" style={style} />
    )
  }
}

export default App
