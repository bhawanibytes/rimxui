import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

// Define the props type
interface ChatNotificationProps {
  title: string;
  message: string;
  onClose: () => void;
}

export function ChatNotification({ title, message, onClose }: ChatNotificationProps) {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fallback URL
  const fallbackAudioUrl = "https://rimxuidev.vercel.app/audio/NotificationSound.mp3"; // Replace with your actual remote URL

  useEffect(() => {
    const checkLocalAudio = async () => {
      try {
        // Check if the local file exists
        const response = await fetch("/audio/NotificationSound.mp3", { method: "HEAD" });

        if (response.ok) {
          // If the file exists locally, use the local path
          setAudioSrc("/audio/NotificationSound.mp3");
        } else {
          // Fallback to remote URL if local file doesn't exist
          setAudioSrc(fallbackAudioUrl);
        }
      } catch (error) {
        console.warn("Error fetching the local audio file:", error);
        // Fallback to remote URL in case of network error
        setAudioSrc(fallbackAudioUrl);
      }
    };

    checkLocalAudio();
  }, []);

  useEffect(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.play().catch((e) => {
        console.warn("Sound couldn't be played automatically:", e);
      });
    }
  }, [audioSrc]);

  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex justify-between items-start gap-3 border border-gray-200 dark:border-gray-700">
      {audioSrc && <audio ref={audioRef} src={audioSrc} preload="auto" />}
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
