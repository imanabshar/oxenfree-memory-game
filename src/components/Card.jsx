import Tilt from "react-parallax-tilt";
import cardBack from "../assets/cards/card-back.png";

function Card({ image, name, flipped, onClick }) {
  return (
    <Tilt>
      <div className="w-52 h-80 perspective cursor-pointer" onClick={onClick}>
        <div className={`card-inner ${flipped ? "flipped" : ""}`}>
          {/* FRONT */}
          <div className="card-face card-front">
            <div className="relative w-full h-80 rounded-xl overflow-hidden bg-[#101f1f] glow">
              <img
                src={image}
                alt={name}
                draggable="false"
                className="w-full h-72 object-cover brightness-150"
              />
              <p className="p-1 text-center text-xl oxenfree-text">{name}</p>
            </div>
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <div className="relative rounded-xl overflow-hidden glow">
              <img
                src={cardBack}
                alt = "card back"
                draggable="false"
                className="w-full h-full brightness-125 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
