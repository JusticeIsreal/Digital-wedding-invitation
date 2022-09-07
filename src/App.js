import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppreciationPage from "./AppreciationPage";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dynamic" element={<AppreciationPage />}></Route>
        </Routes>
      </div>
      <p>This was </p>
    </Router>
  );
}

export default App;
