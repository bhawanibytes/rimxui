import { useEffect, useState } from "react";

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          transition: "all  ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default Spotlight;
