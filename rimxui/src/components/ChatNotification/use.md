import React from "react";
import { NotificationContainer } from "./components/notification/NotificationContainer";

function App() {
 

  return (
    <div>
      <NotificationContainer />
      <button onClick={() =>
          window.notify({
            title: "Welcome!",
            message: "You just logged in fuckckjckahakhhfghagfgagsgagfagjsgjfa.",
            type: "success",
          })
        }>Show Notification</button>
    </div>
  );
}

export default App;
