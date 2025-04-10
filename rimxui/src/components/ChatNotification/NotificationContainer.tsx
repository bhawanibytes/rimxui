

import React, { useState, useEffect } from "react";
import { ChatNotification } from "./ChatNotification";
import { AnimatePresence, motion } from "framer-motion";

const MAX_NOTIFICATIONS = 3; // ✅ Limit max visible notifications

export function NotificationContainer() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prev) => {
      const updated = [...prev, notification];
      // ✅ Keep only the last MAX_NOTIFICATIONS
      if (updated.length > MAX_NOTIFICATIONS) {
        updated.shift(); // remove oldest
      }
      return updated;
    });
  };

  const removeNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    window.notify = addNotification;
    return () => {
      window.notify = undefined;
    };
  }, []);

  return (
    <div className="fixed z-50 top-4 right-4 flex flex-col gap-3 w-fit max-w-sm">
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ChatNotification
              {...notification}
              onClose={() => removeNotification(index)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
