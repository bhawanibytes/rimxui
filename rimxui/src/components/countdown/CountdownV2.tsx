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
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />

      <div className="text-center p-8 relative z-10">
        {/* Animated Moving Gradient Text */}
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text drop-shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #1400ff, #ff00b3)",
            backgroundSize: "200% auto",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          RiMX UI
        </motion.h1>
        <h2 className="text-2xl font-semibold mt-4 tracking-wide">
          M<span className="text-red-400">i</span>XING YOUR{" "}
          <span className="text-yellow-300">FAV</span> UI
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          We're launching on April 20, 2025!
        </p>
        <div className="flex justify-center gap-4 mt-6">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div
              key={key}
              className="bg-black/40 p-4 rounded-xl shadow-md text-center w-20"
            >
              <span className="text-3xl font-bold text-blue-400">{value}</span>
              <p className="text-sm text-gray-300">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
