import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LayOut } from "./Layout";
import { AltouraAllPages } from "./Components/Projects/AltouraAllPages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />} />
      <Route path="/project/:projectId" element={<AltouraAllPages />} />
    </Routes>
  );
}
export default App;