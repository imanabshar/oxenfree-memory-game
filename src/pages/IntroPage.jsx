import Logo from "../components/Logo";

function IntroPage() {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <Logo variant="intro" />
      <button className="oxenfree-start-btn mt-14 px-10 py-4">START</button>
    </div>
  );
}

export default IntroPage;
