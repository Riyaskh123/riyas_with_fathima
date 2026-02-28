const Event = () => {
  return (
    <section className="py-20 bg-[#F8F8F8] flex justify-center px-2">
      <div className="backdrop-blur-[3px] bg-white/60 border border-gray-200 pt-5 rounded-3xl max-w-xl w-full text-center shadow-xl">

        <h2 className="text-4xl font-serif mb-8">
          Reception
        </h2>

        <div className="space-y-2 text-gray-700 text-lg">
          <p>Sunday, 5<sup>th</sup> April 2026</p>
          <p>6:00 PM Onwards</p>
          <p>Ideal Auditorium, Thaikattukara, Aluva</p>
        </div>

        <div className="w-[100%] h-[200px] mt-10 overflow-hidden rounded-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.0948198114565!2d76.34650537487461!3d10.091316471457068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ec42cf13edb%3A0x615680e4b7d202ff!2sIdeal%20Auditorium!5e0!3m2!1sen!2sae!4v1772266890520!5m2!1sen!2sae" style={{width: "100%", height: "100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Event;