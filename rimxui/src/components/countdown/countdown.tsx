import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./gradient-animation.json";

const Countdown = () => {
  const targetDate = new Date("2025-04-20T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice", // Ensures it fills the container while cropping excess
        }}
      />

      <motion.h1
        className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 tracking-wide"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        RiMX
      </motion.h1>

      <motion.h2
        className="text-6xl font-extrabold mb-4 tracking-wide text-center text-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        M<span className="text-red-500">i</span>XING YOUR FAV UI
      </motion.h2>

      <motion.p
        className="text-lg mb-8 font-semibold text-center text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        We're launching on April 20, 2025!
      </motion.p>

      {/* Countdown Timer */}
      <div className="flex gap-8 mb-10">
        {Object.entries(timeLeft).map(([label, value]) => (
          <motion.div
            key={label}
            className="bg-gradient-to-br from-gray-800 to-gray-700 text-cyan-300 px-8 py-6 rounded-2xl text-center shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out border border-gray-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-5xl font-bold">{value}</span>
            <div className="text-xs font-medium mt-2 text-gray-400">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Countdown;
