import { NotificationContainer } from "../ChatNotification/NotificationContainer";
import { notify } from "../ChatNotification/NotificationManager";

function NotificationPage() {
  return (
    <div>
      <NotificationContainer />
      <button
        onClick={() =>
          notify({
            title: "Success",
            message: "You just triggered a notification!",
            type: "success",
            duration: 4000,
          })
        }
      >
        Show Notification
      </button>
    </div>
  );
}

export default NotificationPage;
