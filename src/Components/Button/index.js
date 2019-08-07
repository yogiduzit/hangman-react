import React from 'react';

export default function Button(props) {
  return(
    <div className="button-container">
      <button className="button">{props.alphabet}</button>
    </div>
  )
}