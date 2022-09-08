import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppreciationPage from "./AppreciationPage";
import Home from "./Home";
import AppContext from "..//src/AppProvider";
import { useContext, useEffect } from "react";

function App() {
  const { name, phonenumber, attend, spouse, people } = useContext(AppContext);

  // console.log(name);
  // dynamic name change
  let ff = people.filter((person) => person.name === name);
  const submitInfo = () => {
    let gg = {
      id: 4,
      name,
      phonenumber,
      attend,
      spouse,
      seatNo: Math.floor(Math.random() * 40),
    };

    people.unshift(gg);
    console.log(people);
  };

  console.log(ff.map((r) => r.name));
  return (
    <Router>
      <div className="App" style={{ position: "relative" }}>
        <Routes>
          <Route path="/" element={<Home submitinfo={submitInfo} />}></Route>
          <Route path="/dynamic" element={<AppreciationPage ff={ff} />}></Route>
        </Routes>

        {/* <p
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
        </p> */}
      </div>
    </Router>
  );
}

export default App;
