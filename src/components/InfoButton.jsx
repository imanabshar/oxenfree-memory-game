import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import info from "../assets/info.png";

function InfoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const popupWidth = 384; 

      let left = rect.left - popupWidth + 35; 

      setPopupPosition({
        top: rect.top + 50,
        left: left,
      });
    }
  }, [isOpen]);
  

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="hover:scale-110 transition-transform"
      >
        <img src={info} alt="Info" className="w-24 h-16" />
      </button>

      {isOpen && (
        <div
          className="absolute z-50 py-7 px-7 w-96 border border-gray-400 info-box"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 border rounded-full glow 
            p-1 text-[#baf2e5] hover:text-white hover:scale-110 transition-transform"
          >
            <FaTimes size={20} />
          </button>

          <h2 className="text-2xl mb-2 text-center oxenfree-text">Info</h2>

          <div className="w-full h-[2px] bg-gradient-to-r from-[#ccf8ec] via-transparent to-[#ccf8ec] mb-3"></div>

          <p className="mt-2 text-[#dceef2] text-center font-sans tracking-wide">
            Welcome to <strong>Oxenfree Memory</strong>. Click a card once to
            lock it & it can’t be chosen again, so remember your selections.
          </p>
        </div>
      )}
    </>
  );
}

export default InfoButton;
