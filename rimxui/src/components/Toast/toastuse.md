home.jsx
<!-- import { useToast } from "./toast/ToastContext"; // same folder se le raha hai

const Home = () => {
  const { showToast } = useToast();

  return (
    <div style={{ padding: "2rem" }}>
     <button onClick={() => showToast(" Task completed!", "default")}>
      Show Toast
    </button>
    </div>
  );
};

export default Home; -->


app.jsx

<!-- 
import Home from "./components/home";
import { ToastProvider } from "./components/toast/ToastContext"; // path adjust karle

function App() {
  return (
    <ToastProvider position="bottom-left">
      <Home />
    </ToastProvider>
  );
}

export default App; -->
