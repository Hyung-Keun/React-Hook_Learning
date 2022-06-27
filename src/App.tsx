import { Routes, Route } from "react-router-dom";

import JHPage from "./JHerrington/JHPage";
import CodingStarPage from "./CodingStar/CodingStarPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JHPage />} />
      <Route path="/codingstar" element={<CodingStarPage />} />
    </Routes>
  );
}

export default App;
