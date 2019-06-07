import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
   const cards = props.cards
  //console.log(cards)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
         { 
           cards.map((card, index) => {
          return <Card
            key = {index}
            img = {card.img}
            author = {card.author}
            headline = {card.headline}
            tab = {card.tab}
           />
          })
          }
          />
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;