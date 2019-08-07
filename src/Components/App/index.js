import React from 'react';
import Keyboard from '../Keyboard';
import names from './wordData';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guessingWord: names[Math.floor(Math.random(names.length))],
    }
  }

  render() {
    return(
      <article>
      <div className="hangman-container"></div>
      <Keyboard guessWord={this.state.guessingWord}></Keyboard>
      </article>
    );
  }
}