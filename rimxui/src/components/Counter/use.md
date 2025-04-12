import CountdownTimer from "./components/countdow/countdow";

function App() {
  return (
    <div className="p-4">
      <CountdownTimer endTime={180} format="hh:mm:ss" />
      <CountdownTimer
        endTime="2025-04-10T18:00:00Z"
        format="dd:hh:mm:ss"
        onEnd={() => alert("Time's up! 🎉")}
      />
      <CountdownTimer
        endTime="2025-05-01T12:00:00Z"
        format="dd:hh:mm:ss"
        className="text-2xl font-semibold"
      />
      <div className="bg-red-500 text-white p-4 text-center">
        <p>⏳ Sale ends in:</p>
        <CountdownTimer endTime={3600} format="hh:mm:ss" />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Payment will expire in:</h2>
        <CountdownTimer
          endTime={900} // 15 minutes
          format="hh:mm:ss"
          className="text-red-600 text-2xl"
        />
      </div>
    </div>
  );
}
export default App;
