import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aboutme from "./pages/Aboutme/Aboutme";
import Active from "./pages/Active/Active";
import Piece from "./pages/Piece/Piece";
import Travel from "./pages/Travel/Travel";
import Work from "./pages/Work/Work";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/event-experience" element={<Active />} />
        <Route path="/portfolio" element={<Piece />} />
        <Route path="/travel-blog" element={<Travel />} />
        <Route path="/work-experience" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
