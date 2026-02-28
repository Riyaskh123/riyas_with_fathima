const StoryStrip = () => {
  return (
    <section className="relative py-10 bg-black text-white text-center overflow-hidden">

      {/* Arabic Calligraphy Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[3rem] md:text-[7rem] font-[Amiri] text-white/10 select-none">
          ﷽
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h2 className="text-2xl md:text-3xl font-heading mb-5 tracking-wide">
          A Bond Written By Allah
        </h2>

        <p
          className="max-w-3xl mx-auto text-xl md:text-2xl leading-loose text-gray-200"
          style={{ fontFamily: "Amiri" }}
          dir="rtl"
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>

        <p className="mt-6 text-sm tracking-widest text-gold uppercase">
          Qur’an 30:21
        </p>
      </div>
    </section>
  );
};

export default StoryStrip;