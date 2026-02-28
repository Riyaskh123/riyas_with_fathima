const Hero = () => {
  return (
    <section className="sticky top-0 h-screen overflow-hidden z-[-1]">

      {/* Desktop Images */}
      <img src="/hero1.jpg" className="hero-image hero-image-1 hidden md:block" />
      <img src="/hero2.jpg" className="hero-image hero-image-2 hidden md:block" />
      <img src="/hero3.jpg" className="hero-image hero-image-3 hidden md:block" />

      {/* Mobile Images */}
      <img src="/hero1-mobile.jpg" className="hero-image hero-image-1 md:hidden" />
      <img src="/hero2-mobile.jpg" className="hero-image hero-image-2 md:hidden" />
      <img src="/hero3-mobile.jpg" className="hero-image hero-image-3 md:hidden" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <p className="tracking-[0.4em] text-sm text-[#C5A880] mb-6 uppercase font-semibold">
          Wedding Invitation
        </p>

        <h1 className="text-4xl md:text-7xl font-heading" style={{ fontFamily: '"Pacifico", cursive',fontWeight: 300 }}>
          Muhammed Riyas
        </h1>

        <p className="text-[#C5A880] text-6xl italic my-2">&</p>
        <h1 className="text-4xl md:text-7xl font-heading mb-2" style={{ fontFamily: '"Pacifico", cursive',fontWeight: 300 }}>
          Fathima Kareem
        </h1>

        <p className="mt-4 text-gray-200 max-w-md italic">
          Two souls united by faith, written by destiny.
        </p>

      </div>
    </section>
  );
};

export default Hero;