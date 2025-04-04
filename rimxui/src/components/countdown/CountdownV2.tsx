import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animation from "./gradient-animation.json";
export function CountdownV2() {
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
    <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden text-white">
      {/* Animated Gradient Background */}

      <motion.div
        className="absolute inset-0 "
        // animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </motion.div>

      <motion.div
        className="text-center p-8 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Gradient Text with Subtle Glow */}
        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #1400ff, #ff00b3)",
            backgroundSize: "200% auto",
            textShadow: "2px 1px 3px rgba(255, 255, 255, 0.4)",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          RiMX UI
        </motion.h1>

        <motion.h2
          className="text-2xl font-semibold mt-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          M<span className="text-red-400">i</span>XING YOUR{" "}
          <span className="text-yellow-300">FAV</span> UI
        </motion.h2>

        <motion.p
          className="mt-2 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We're launching on April 20, 2025!
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {Object.entries(timeLeft).map(([key, value]) => (
            <motion.div
              key={key}
              className="bg-black/40 p-4 rounded-xl shadow-md text-center w-20"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="text-3xl font-bold text-blue-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {value}
              </motion.span>
              <p className="text-sm text-gray-300">{key}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
