import { useState } from "react";
import alex from "../assets/cards/alex.png";
import clarissa from "../assets/cards/clarissa.png";
import michael from "../assets/cards/michael.png";
import jonas from "../assets/cards/jonas.png";
import ren from "../assets/cards/ren.png";
import nona from "../assets/cards/nona.png";
import radio from "../assets/cards/radio.png";
import radioTower from "../assets/cards/radio-tower.png";
import wardenStation from "../assets/cards/warden-station.png";
import riftIntime from "../assets/cards/rift-in-time.png";
import cabins from "../assets/cards/cabins.png";
import magnetophone from "../assets/cards/magnetophone.png";
import Card from "./Card";

const cards = [
  { id: 1, name: "Alex", image: alex },
  { id: 2, name: "Clarissa", image: clarissa },
  { id: 3, name: "Michael", image: michael },
  { id: 4, name: "Jonas", image: jonas },
  { id: 5, name: "Ren", image: ren },
  { id: 6, name: "Nona", image: nona },
  { id: 7, name: "Radio", image: radio },
  { id: 8, name: "Radio Tower", image: radioTower },
  { id: 9, name: "Station", image: wardenStation },
  { id: 10, name: "Rift in time", image: riftIntime },
  { id: 11, name: "Cabins", image: cabins },
  { id: 12, name: "Magneto", image: magnetophone },
];

function CardGrid() {
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(cardId) {
    if (!clickedCards.includes(cardId)) {
      const newClickedCards = [...clickedCards, cardId];
      setClickedCards(newClickedCards);
      //score will be incremented here passed as a prop from parent
      console.log(newClickedCards);
    } else {
      //game over logic display here will make a component of that
      console.log("duplicate card selected");
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default CardGrid;
