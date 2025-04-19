import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
const AnimatedButtons = () => {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay: 0 * 0.2,
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
      >
        <Button label="Primary" variant="default" />
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay: 1 * 0.2,
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
      >
        <Button label="Secondary" variant="secondary" />
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay: 2 * 0.2,
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
      >
        <Button label="Destructive" variant="destructive" />
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay: 3 * 0.2,
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
      >
        <Button label="Outline" variant="outline" />
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay: 4 * 0.2,
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
      >
        <Button label="Icon" variant="icon" />
      </motion.div>
    </>
  );
};

export default AnimatedButtons;
