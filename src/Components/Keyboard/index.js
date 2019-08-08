import React from 'react';
import Button from '../Button';

export default function KeyBoard(props) {
  const alphabets = [];
  for (let i = 0; i < 26; i++) {
    alphabets.push(i);
  }


  return(
    <div className="keyboard-container">
      <div className="buttons-container">
        { alphabets.map((i) => <Button key={i} clickHandler={props.clickHandler} alphabet={String.fromCharCode(i + 65)}/>)}
      </div>
      <div className="alphabet-fields">
        { props.word.toUpperCase().split('').map((i) => props.guessedLetters.includes(i) ? <p key={i} className="blanks">{i}</p> : <p key={i} className="blanks">__</p>) }
      </div>
    </div>

  );
}