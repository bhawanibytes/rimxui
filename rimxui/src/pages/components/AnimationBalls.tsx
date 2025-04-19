import { motion } from "framer-motion";
const AnimationBalls = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 200, -300, 150, 0],
          y: [0, -200, 100, -150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute w-96 h-96 bg-sky-500/20 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -250, 300, -100, 0],
          y: [0, 150, -200, 100, 0],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 left-52 top-48 bg-pink-500/20 rounded-full blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 30, -400, 30, 0],
          y: [0, 150, 300, 500, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 bottom-0 right-0 mb-10 mr-10 bg-yellow-500/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 100, -400, 200, 0],
          y: [0, 150, 200, 150],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 right-52 top-0 bg-green-500/20 rounded-full blur-3xl"
      ></motion.div>
    </>
  );
};

const PurpleBalls = () => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, 100, -100, 150, 0],
        y: [0, -100, 100, -10, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-2xl"
    ></motion.div>
  );
};

const WhiteBalls = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{
        x: [0, 200, 400, 600, 800, 1000, 800, 600, 400, 200, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="absolute w-96 h-96 bg-white/10 rounded-full blur-2xl"
    />
  );
};

export { AnimationBalls, PurpleBalls, WhiteBalls };
