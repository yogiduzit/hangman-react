import React from 'react';
import styled from 'styled-components';

export default function Gallows(props) {

  let wrongGuesses = props.wrongGuesses 

  if (wrongGuesses > 6) {
    wrongGuesses = 6;
  }
  const hangman = <Part className="hangman-image" src={`gallows_${wrongGuesses}.jpg`}/>

  return(
    <div className="hangman-container">
      {hangman}
    </div>
  )
}


const Part = styled.img`
 position: relative;
 height: 375px;
 width: 459px;
`;