import React from 'react';
import Keyboard from '../Keyboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      guessingWord: '',
    }
  }

  render() {
    return(<Keyboard></Keyboard>)
  }
}