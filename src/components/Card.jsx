function Card({ image, name, onClick }) {
  return (
    <div onClick={onClick} className="w-52 cursor-pointer group perspective">
      <div
        className="relative w-full h-80 rounded-xl overflow-hidden bg-[#101f1f] glow"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover brightness-150"
        />
        <p className="p-1 text-center text-xl sub-title">{name}</p>
      </div>
    </div>
  );
}
export default Card;


