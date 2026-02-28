const Groom = () => {
  return (
    <section className=" bg-[#F8F8F8]">
      <div className=" mx-auto grid md:grid-cols-2 gap-4 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/groom.jpg"
            alt="Groom"
            className="shadow-xl object-cover h-[500px] md:h-[700px] w-full"
          />
        </div>

        <div className="order-1 md:order-2 fade-up p-5">
          <h1 className="text-5xl font-serif mb-6">
            The Groom
          </h1>

          <h2 className="text-4xl text-[#C5A880] mb-2">
            Muhammed Riyas
          </h2>

          <h5 className="text-[17px] md:text-xl">S/o K A HAMEED & Mrs SULAIKHA HAMEED</h5>
          <p className="mb-4">Kattuparambil House,Kodikuthumala, Asokapuram P.O, Aluva</p>

          <p className="text-[16px] leading-relaxed">
            Guided by faith and strength, beginning a lifetime
            of devotion and partnership.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Groom;