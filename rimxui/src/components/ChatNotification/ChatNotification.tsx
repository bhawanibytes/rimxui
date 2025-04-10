// components/notification/ChatNotification.jsx
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import soundSrc from "./NotificationSound.mp3";

export function ChatNotification({ title, message, onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.warn("Sound couldn't be played automatically:", e);
      });
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex justify-between items-start gap-3 border border-gray-200 dark:border-gray-700">
      <audio ref={audioRef} src={soundSrc} preload="auto" />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-700 dark:text-white">{message}</p>
      </div>
      <button onClick={onClose} aria-label="Close notification" className="text-gray-500 hover:text-gray-700 transition">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
