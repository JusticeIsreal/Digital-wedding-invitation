import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppreciationPage from "./AppreciationPage";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App" style={{ position: "relative" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dynamic" element={<AppreciationPage />}></Route>
        </Routes>

        <p
          style={{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            fontSize: "10px",
            paddingBottom: "15px",
            position: "absolute",
            bottom: "0",
            paddingBottom: "0",
            marginRight: "auto",
            marginLeft: "auto",
            left: "0",
            right: "0",
          }}
        >
          Designed by Justice : <a href="Tel:+2348104015180">+234 8104015180</a>
          :::: Ajistechnology@gmail.com
        </p>
      </div>
    </Router>
  );
}

export default App;
