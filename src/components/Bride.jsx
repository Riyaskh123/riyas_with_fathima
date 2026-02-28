const Bride = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid md:grid-cols-2 gap-4 items-center">

        <div className="fade-up p-5">
          <h1 className="text-4xl font-serif mb-6">
            The Bride
          </h1>

          <h2 className="text-3xl text-[#C5A880] mb-4">
            Fathima Kareem
          </h2>
          <h5 className="text-[15px] md:text-xl">D/o Mr. ABDUL KAREEM & Mrs. SOUDHA KAREEM</h5>
          <p className="mb-4">Tharamelparambil(H), Panayikulam</p>

          <p className="text-[15px] md:text-xl leading-relaxed">
            Elegant in faith and grace, stepping into a new chapter
            written with love and barakah.
          </p>
        </div>

        <div>
          <img
            src="/bride.jpg"
            alt="Bride"
            className=" object-cover h-[500px] md:h-[700px] w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Bride;