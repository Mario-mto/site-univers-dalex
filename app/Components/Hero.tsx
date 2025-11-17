import { motion } from "framer-motion";

const Hero = () => {
  return (  
    <>
    <section
  id="home"
  className="relative h-screen w-full flex items-center justify-center overflow-hidden"
>
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:"url('images/hero-section-image.jpg')"
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center text-center px-10">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-6xl font-bold text-white drop-shadow-xl"
    >
      L'univers d'Alex
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="mt-6 text-2xl text-white/80 max-w-2xl"
    >
      Cuisine raffinée, ambiance chaleureuse et expérience inoubliable.
    </motion.p>

    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="mt-10 px-8 py-4 bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-xl text-lg hover:bg-white/30 transition shadow-xl"
    >
      Réserver une table
    </motion.button>
  </div>
</section>
    </>
  );
};

export default Hero;