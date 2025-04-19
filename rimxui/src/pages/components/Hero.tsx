import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AnimationBalls } from "./AnimationBalls";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const gradientVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: "100% 50%",
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 20,
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 dark:bg-black"
      style={{ opacity, scale }}
    >
      <AnimationBalls />
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-purple-400/10 to-blue-400/10 dark:from-purple-400/5 dark:to-blue-400/5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              opacity: [0.5, 0.7],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 text-transparent bg-clip-text"
              style={{ lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Design Fast. Develop Faster. with{" "}
              <span className="bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-zinc-200 dark:to-zinc-900 bg-clip-text text-transparent font-bold">
                R<span className="text-red-500 drop-shadow-md">i</span>MX UI
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              RiMX UI is a sleek, developer-first React component library
              designed for speed, flexibility, and stunning design—helping you
              build modern, responsive interfaces with ease and elegance.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={"/docs"}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg"
                >
                  <Download size={18} />
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={"https://github.com/bhawanibytes/rimxui"}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-medium rounded-lg border border-gray-200 dark:border-slate-700"
                >
                  <ExternalLink size={18} />
                  View on GitHub
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="w-full aspect-video bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm text-gray-600 dark:text-gray-400 font-mono">
                  RiMX UI Components
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-800 dark:text-white font-medium">
                    Buttons
                  </span>
                </motion.div>
                <motion.div
                  className="h-16 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-800 dark:text-white font-medium">
                    Cards
                  </span>
                </motion.div>
                <motion.div
                  className="h-16 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-800 dark:text-white font-medium">
                    Pagination
                  </span>
                </motion.div>
                <motion.div
                  className="h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-gray-800 dark:text-white font-medium">
                    Modals
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ y }}
        >
          <motion.a
            href="#features"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="mb-2 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
