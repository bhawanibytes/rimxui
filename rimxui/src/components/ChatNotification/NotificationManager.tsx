import { Notification } from "./NotificationContainer";
// Default fallback if container not mounted
let notifyFn: (notification: Omit<Notification, "id">) => void = (n) =>
  console.warn("Notification system is not mounted!", n);

export const notify = (notification: Omit<Notification, "id">) => {
  notifyFn(notification);
};

// Called by NotificationContainer to register itself
export const registerNotifier = (
  fn: (notification: Omit<Notification, "id">) => void
) => {
  notifyFn = fn;
};
