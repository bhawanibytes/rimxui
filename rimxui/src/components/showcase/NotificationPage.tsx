import { NotificationContainer } from "../ChatNotification/NotificationContainer";
import { notify } from "../ChatNotification/NotificationManager";
import { CliTabs } from "../CliTabs/CliTab";

function NotificationPage() {
  return (
    <div>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
          }}
        />
      </section>
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
