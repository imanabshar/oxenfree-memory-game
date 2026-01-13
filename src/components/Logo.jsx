function Logo({ variant }) {
  const isIntro = variant === "intro";

  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`relative oxenfree-spectral oxenfree-line font-semibold
          ${
            isIntro
              ? "text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] tracking-[0.2em] sm:tracking-[0.3em]"
              : "text-4xl sm:text-5xl md:text-6xl tracking-[0.25em]"
          }
        `}
      >
        OXENFREE
      </h1>

      <span
        className={`uppercase text-[#9fded0]
          ${
            isIntro
              ? "text-2xl sm:text-3xl md:text-4xl tracking-[0.5em] sm:tracking-[0.65em]"
              : "text-xl sm:text-2xl tracking-[0.5em]"
          }
        `}
      >
        MEMORY
      </span>
    </div>
  );
}

export default Logo;
