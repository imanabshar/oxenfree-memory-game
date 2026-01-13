// Card.js
import Tilt from "react-parallax-tilt";
import cardBack from "../assets/cards/card-back.png";

function Card({ image, name, flipped, onClick }) {
  return (
    <Tilt className="w-full h-full">
      <div
        className="w-full aspect-[3/4] cursor-pointer perspective"
        onClick={onClick}
      >
        <div className={`card-inner ${flipped ? "flipped" : ""}`}>
          {/* FRONT */}
          <div className="card-face card-front absolute inset-0 rounded-xl overflow-hidden bg-[#101f1f] glow flex flex-col">
            <div className="w-full h-full">
              <img
                src={image}
                alt={name}
                draggable="false"
                className="w-full h-full object-cover brightness-150"
              />
            </div>
            <p className="absolute bottom-0 w-full text-center p-1 sm:p-2 text-sm sm:text-base md:text-lg oxenfree-text bg-black/40">
              {name}
            </p>
          </div>

          {/* BACK */}
          <div className="card-face card-back absolute inset-0 rounded-xl overflow-hidden glow">
            <img
              src={cardBack}
              alt="card back"
              draggable="false"
              className="w-full h-full brightness-125"
            />
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
