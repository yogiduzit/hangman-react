import React from 'react';
import Keyboard from '../Keyboard';
import names from './wordData';
import Gallows from '../Gallows';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: names[Math.floor(Math.random(names.length))],
      guessedLetters: [],
      wrongGuesses: 0,
      isGuessed: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const { target } = event;
    const searchArray = this.state.guessedLetters;

    if (!searchArray.includes(target.innerText)) {

      const newArray = [...this.state.guessedLetters]
      newArray.push(target.innerText)


      this.setState({
        guessedLetters: newArray
      });
    }

    this.detectWrongGuess(this.state.word.toUpperCase(), target.innerText);
    this.detectWordGuessed(this.state.guessedLetters, this.state.word);
  }

  detectWrongGuess(word, alphabet) {
    if (!word.includes(alphabet)) {
      let wrongGuesses = this.state.wrongGuesses;
      this.setState({
        wrongGuesses: wrongGuesses += 1
      });
    }
    this.gameOver();
  }

  detectWordGuessed(array, word) {
    for (let alphabet of word.toUpperCase()) {
      if (!array.includes(alphabet)) {
        return false;
      }
    }
    this.setState({
      isGuessed: true
    }, () => {
      this.gameWin();
    });
    return true;
  }

  gameOver() {
    if (this.state.wrongGuesses >= 6) {
      alert(`The correct word is ${this.state.word}. Try Again`);
      window.location.reload();
    }
  }
  gameWin() {
    if (this.state.isGuessed) {
      alert("You win");
      window.location.reload();
    }
  }

  render() {
    return(
      <article className="main-container">
      <Gallows wrongGuesses={this.state.wrongGuesses} />
      <Keyboard word={this.state.word} 
          clickHandler={this.handleButtonClick} 
          guessedLetters={this.state.guessedLetters} 
          onWrongGuess={this.detectWrongGuess}
          >
      </Keyboard>
      </article>
    );
  }
}