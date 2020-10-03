import React from 'react';
import './Card.css'

export default function Card(props) {
  let imgSource = `${props.house}.jpg`;
  return (
    <div className="Card">
      <h1>{props.house}</h1>
      <img src={imgSource} />
      <h4>Founder:</h4>
      <p>{props.founder}</p>
      <h4>Animal:</h4>
      <p>{props.animal}</p>
      <h4>Traits:</h4>
      <p>{props.traits}</p>
    </div>
  );
}