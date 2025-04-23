import { BoltLoader } from "react-awesome-loaders";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

const LoaderScreen = ({ onEnter, audioRef }) => {
  const handleClick = () => {
    if (audioRef?.current) {
      audioRef.current.volume = 0.05;
      audioRef.current.play().catch((err) => {
        console.warn("Audio play blocked:", err);
      });
    }
    if (typeof onEnter === "function") {
      onEnter();
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#FF4655" },
            links: {
              enable: true,
              color: "#FF4655",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              random: true,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            size: { value: { min: 1, max: 5 } },
            opacity: { value: 0.5 },
          },
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-4xl sm:text-6xl font-extrabold tracking-widest uppercase text-center glow-text mb-6"
      >
        Get Ready to Enter
      </motion.h1>

      <motion.p
        className="z-10 text-sm sm:text-lg text-gray-400 italic font-mono flicker-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        Initializing access protocols...
      </motion.p>

      <div className="z-10 mb-16">
        <BoltLoader
          className={"loaderbolt"}
          boltColor={"#FF4655"}
          backgroundBlurColor={"#1E1E1E"}
        />
      </div>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="z-10 px-10 py-5 bg-[#FF4655] text-white font-bold rounded-xl shadow-xl tracking-widest hover:bg-[#FF1F2D] transition-all animate-pulse"
      >
        ENTER SITE
      </motion.button>
    </div>
  );
};

export default LoaderScreen;
