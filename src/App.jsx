import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Services from "./pages/Services";
import Why from "./pages/Why";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/residential" element={<Residential />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/services" element={<Services />} />
      <Route path="/why" element={<Why />} />
    </Routes>
  );
}

export default App;
