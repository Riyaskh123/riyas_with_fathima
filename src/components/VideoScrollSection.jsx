import { motion, useScroll, useTransform } from "framer-motion";

export const VideoScrollSection = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.7],
    [0, 1, 0]
  );

  return (
    <section className="relative h-[200vh] bg-black">

      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/wedding.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            A Journey of Love & Faith
          </h2>

          <p className="max-w-md mx-auto text-gray-200">
            Witness the union of Muhammed Riyas & Fathima Kareem
          </p>
        </motion.div>

      </div>
    </section>
  );
};