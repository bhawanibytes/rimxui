import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dump from "./pages/Dump";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dump" element={<Dump />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
