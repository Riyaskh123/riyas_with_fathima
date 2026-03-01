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

        <h3 className="text-lg md:text-2xl font-heading mt-4 text-[#C5A880] font-bold">
          April 5th 2026, Sunday <br/>6:00 PM Onwards
        </h3>


        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-9 border border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C5A880] rounded-full animate-bounce" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;