import React from 'react';
import Card from './Card'
import './Board.css'

export default function Board(props) {
  let cards = {
    hogwartsHouses: [
      {house: 'Gryffindor', founder: 'Godric Gryffindor', animal: 'Lion', traits: 'Brave'},
      {house: 'Hufflepuff', founder: 'Helga Hufflepuff', animal: 'Badger', traits: 'Loyal'},
      {house: 'Ravenclaw', founder: 'Rowena Ravenclaw', animal: 'Eagle', traits: 'Wise'},
      {house: 'Slytherin', founder: 'Salazar Slytherin', animal: 'Snake', traits: 'Cunning'},
    ]
  };

  return (
    <div className="Board">
      <h1>Hogwarts Houses</h1>
      <div className="Board-Card">
      {
        cards.hogwartsHouses.map((p) => (
          <Card house={p.house} founder={p.founder} animal={p.animal} traits={p.traits} />
        ))
      }
      </div>
    </div>
  );
}