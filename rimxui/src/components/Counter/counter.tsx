import { useEffect, useState } from "react";

export default function CountdownTimer({
  endTime, //  like "2025-04-10T18:00:00Z" or seconds like 180
  onEnd = () => {},
  className = "",
  format = "hh:mm:ss", // or "dd:hh:mm:ss"
}) {
  const isDuration = typeof endTime === "number";
  const [startTime] = useState(() => new Date().getTime());

  const getTimeRemaining = () => {
    let total;
    const now = new Date().getTime();

    if (isDuration) {
      total = endTime * 1000 - (now - startTime);
    } else {
      total = Date.parse(endTime) - now;
    }

    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);

    return { total, days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTimeRemaining();
      setTime(newTime);

      if (newTime.total <= 0) {
        clearInterval(timer);
        onEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div
      className={`font-mono text-lg md:text-xl text-center text-gray-800 dark:text-gray-200 ${className}`}
    >
      {format === "dd:hh:mm:ss" && <span>{pad(time.days)}d :</span>}
      <span>{pad(time.hours)}h :</span>
      <span>{pad(time.minutes)}m :</span>
      <span>{pad(time.seconds)}s</span>
    </div>
  );
}