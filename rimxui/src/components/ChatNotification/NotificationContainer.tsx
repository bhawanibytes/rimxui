import { useState, useEffect } from "react";
import { ChatNotification } from "./ChatNotification";
import { AnimatePresence, motion } from "framer-motion";
import { registerNotifier } from "./NotificationManager"; // 👈 import it

export interface Notification {
  id: string;
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose?: () => void;
}

const MAX_NOTIFICATIONS = 3;

export function NotificationContainer() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, "id">) => {
    const id = crypto.randomUUID();
    const fullNotification: Notification = { id, ...notification };

    setNotifications((prev) => {
      const updated = [...prev, fullNotification];
      if (updated.length > MAX_NOTIFICATIONS) updated.shift();
      return updated;
    });

    if (notification.duration) {
      setTimeout(() => removeNotification(id), notification.duration);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => {
      const toRemove = prev.find((n) => n.id === id);
      if (toRemove?.onClose) toRemove.onClose();
      return prev.filter((n) => n.id !== id);
    });
  };

  useEffect(() => {
    registerNotifier(addNotification); // 👈 this sets global notify
  }, []);

  return (
    <div className="fixed z-50 top-4 right-4 flex flex-col gap-3 w-fit max-w-sm dark:text-white">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ChatNotification
              {...notification}
              onClose={() => removeNotification(notification.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
