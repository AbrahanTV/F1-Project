import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Races from "./pages/Races";
import Drivers from "./pages/Drivers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/races" element={<Races />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
