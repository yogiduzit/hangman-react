import React from 'react';

export default function Button(props) {

  return(
    <div className="button-container">
      <button className="button" onClick={props.clickHandler}>{props.alphabet}</button>
    </div>
  )
}