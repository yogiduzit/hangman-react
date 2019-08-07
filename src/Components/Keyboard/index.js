import React from 'react';
import Button from '../Button';

export default function KeyBoard(props) {
  const alphabets = [];
  for (let i = 0; i < 26; i++) {
    alphabets.push(i);
  }

  return(
    alphabets.map((i) => {
      return <Button key={i} alphabet={String.fromCharCode(i + 65)}/>
    })
  );
}