import { motion, useScroll, useTransform } from 'framer-motion';

export const VideoScrollSection = () => {
  const { scrollYProgress } = useScroll();
  // Example: Change opacity or scale as user scrolls
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);

  return (
    <div className="h-[200vh] bg-emerald-900 relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <video 
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://videocdn.cdnpk.net/videos/958f01c6-d603-4d05-85cd-921d9fa8ffee/horizontal/previews/clear/large.mp4?token=exp=1772181930~hmac=e73b86e2097b1315251e8dd66f99f09c5b3c5d19565f6e9ceef3162e4c8bf9a6" type="video/mp4" />
        </video>
        <motion.div style={{ opacity }} className="relative z-10 text-gold-200 text-center px-6">
          <h2 className="text-4xl font-serif">A Journey of Love & Faith</h2>
          <p className="max-w-md mx-auto mt-4">Witness the union of Muhammed Riyas & Fathima Kareem</p>
        </motion.div>
      </div>
    </div>
  );
};