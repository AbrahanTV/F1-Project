import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Races from "./pages/Races";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<Races />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
