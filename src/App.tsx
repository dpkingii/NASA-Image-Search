import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import DisplayPage from "./DisplayPage";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
};

export default App;
