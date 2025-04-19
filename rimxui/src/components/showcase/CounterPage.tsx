import { CliTabs } from "../CliTabs/CliTab";
import CountdownTimer from "../Counter/counter";
import PreviewWrapper from "../PreviewWrapper";

function App() {
  return (
    <>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/coutdown.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/coutdown.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/coutdown.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/coutdown.json",
          }}
        />
      </section>
      <PreviewWrapper
        label="Basic CountDown"
        variant="centered"
        preview={
          <div className="p-4">
            <CountdownTimer endTime={180} format="hh:mm:ss" />
          </div>
        }
        code={`
import { CountdownTimer } from "@/components/ui/countdowns"
function countdown () {
return (
  <div className="p-4">
    <CountdownTimer endTime={180} format="hh:mm:ss" />
  </div>
    )
  }
`}
      />
      <PreviewWrapper
        label="Countdown With Alert"
        variant="centered"
        preview={
          <div className="p-4">
            <CountdownTimer
              endTime="2025-04-10T18:00:00Z"
              format="dd:hh:mm:ss"
              onEnd={() => alert("Time's up! 🎉")}
            />
          </div>
        }
        code={`
import { CountdownTimer } from "@/components/ui/countdowns"
function countdown () {
return (
  <div className="p-4">
    <CountdownTimer
      endTime="2025-04-10T18:00:00Z"
      format="dd:hh:mm:ss"
      onEnd={() => alert("Time's up! 🎉")}
    />
  </div>
    )
  }
`}
      />
      <PreviewWrapper
        label="Countdown with custom class styling"
        variant="centered"
        preview={
          <div className="p-4">
            <CountdownTimer
              endTime="2025-05-01T12:00:00Z"
              format="dd:hh:mm:ss"
              className="text-2xl font-semibold"
            />
          </div>
        }
        code={`
import { CountdownTimer } from "@/components/ui/countdowns"
function countdown () {
return (
  <div className="p-4">
    <CountdownTimer
      endTime="2025-05-01T12:00:00Z"
      format="dd:hh:mm:ss"
      className="text-2xl font-semibold"
    />
  </div>
    )
  }
`}
      />
      <PreviewWrapper
        label="Sales Countdown"
        variant="default"
        preview={
          <div className="rounded-lg border-red-500 border-2">
            <div className="bg-red-500 text-white p-4 text-center">
              <p>⏳ Sale ends in:</p>
              <CountdownTimer endTime={3600} format="hh:mm:ss" />
            </div>
          </div>
        }
        code={`
import { CountdownTimer } from "@/components/ui/countdowns"
function countdown () {
return (
  <div className="rounded-lg border-red-500 border-2">
    <div className="bg-red-500 text-white p-4 text-center">
      <p>⏳ Sale ends in:</p>
      <CountdownTimer endTime={3600} format="hh:mm:ss" />
    </div>
  </div>
    )
  }
`}
      />
      <PreviewWrapper
        label="Countdown with some more custom class styling"
        variant="default"
        preview={
          <div className="">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">
                Payment will expire in:
              </h2>
              <CountdownTimer
                endTime={900} // 15 minutes
                format="hh:mm:ss"
                className="text-red-600 text-2xl"
              />
            </div>
          </div>
        }
        code={`
import { CountdownTimer } from "@/components/ui/countdowns"
function countdown () {
return (
  <div className="">
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2">
        Payment will expire in:
      </h2>
      <CountdownTimer
        endTime={900} // 15 minutes
        format="hh:mm:ss"
        className="text-red-600 text-2xl"
      />
    </div>
  </div>
    )
  }
`}
      />
    </>
  );
}
export default App;
