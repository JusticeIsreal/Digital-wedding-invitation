import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppreciationPage from "./AppreciationPage";
import Home from "./Home";
import AppContext from "..//src/AppProvider";
import { useState, useEffect, useContext } from "react";
let API = "https://justice-wedding-api.herokuapp.com/users";

const storedItems = JSON.parse(localStorage.getItem("list")) || [];
function App() {
  const { name, phonenumber, attend, spouse } = useContext(AppContext);
  const [people, setPeople] = useState([]);

  //
  // dynamic name change

  // fetch API
  const fetchUsers = () => {
    axios
      .get(API)
      .then((resp) => {
        setPeople(resp.data.users);
      })
      .catch((error) => {
        throw error.message;
      });
  };

  useEffect(() => {
    return () => {
      fetchUsers();
    };
  }, []);

  const postUsers = () => {
    let usersInputs = {
      name: name,
      phoneNumber: phonenumber,
      attend: attend,
      spouse: spouse,
    };

    axios
      .post(API, usersInputs)
      .then((resp) => {})
      .catch((err) => {});

    let usersIn = {
      id: 1,
      name: name,
      phoneNumber: phonenumber,
      attend: attend,
      spouse: spouse,
      seat: Math.floor(Math.random() * 40),
    };

    setList([usersIn]);
    
  };

  const [list, setList] = useState(storedItems);
  //

  // console.log(storedItems);

  console.log(storedItems);
  localStorage.setItem("list", JSON.stringify(list));

  return (
    <Router>
      <div className="App" style={{ position: "relative" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home users={people} postUsers={postUsers} list={storedItems} />
            }
          ></Route>
          <Route
            path="/dynamic"
            element={<AppreciationPage users={people} list={storedItems} />}
          ></Route>
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
