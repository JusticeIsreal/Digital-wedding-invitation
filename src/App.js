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
      <p
        style={{ textAlign: "center", fontSize: "10px", paddingBottom: "15px" }}
      >
        Designed by Justice : <a href="Tel:+2348104015180">+234 8104015180</a>{" "}
        <br />
        E-mail: Ajistechnology@gmail.com
      </p>
    </Router>
  );
}

export default App;
