import "./App.css";
import { FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "..//src/AppProvider";

function Home({ postUsers, users, list }) {
   
  const [ite, setIte] = useState([]);
  const {
    formshow,
    showFrom,
    nameInput,
    phoneNumberInput,
    // genderInput,
    attendInput,
    spouseInput,
    name,
    phonenumber,
    attend,
    gender,
    spouse,
    togglebtn,
    btn,
    submitBtn,
    nameError,
    phonenumberError,
    attendError,
    // genderError,
    nameErrorColor,
    phoneErrorColor,
    // genderErrorColor,
    attendErrorColor,
    // submitInfo,
    // people,
  } = useContext(AppContext);

  useEffect(() => {
    return () => {
      btn();
    };
  }, [name,  phonenumber, attend, gender]);



  

  return (
    <div className="iv-card">
      <div className="pick-table">
        {togglebtn && (
          <button onClick={showFrom}>CLICK HERE TO RESERVE A SEAT</button>
        )}
      </div>
      {formshow && (
        <div className="form">
          {list.length > 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "300px",
                height: "400px",
                border: "5px solid goldenrod",
                backgroundColor: "black",
                position: "relative",
              }}
            >
              <div
                className="cancel"
                onClick={showFrom}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "30px",
                }}
              >
                <FaTimes />
              </div>
              <h1>{list[0].name}</h1>{" "}
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                You already made a reservation and a seat has been reserved for
                you if you have any challenges Click on the link below{" "}
                <a href="Tel:+2348104015180">Click here</a>
              </p>
            </div>
          ) : (
            <form>
              <div className="cancel" onClick={showFrom}>
                <FaTimes />
              </div>
              <h6
                style={{
                  textAlign: "center",
                  zIndex: "2",
                  marginTop: "10px",
                }}
              >
                This invitation ID only covers for a MAXIMUM 0F 2 PERSONS
              </h6>
              <div>
                <label>Full Name :</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => nameInput(e)}
                  style={{ border: nameErrorColor && "2px solid green " }}
                />
                <span
                  style={{
                    color: nameErrorColor ? "green" : "red",
                    marginRight: "auto",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginTop: "5px",
                  }}
                >
                  {nameError}
                </span>
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  value={phonenumber}
                  onChange={(e) => phoneNumberInput(e)}
                  style={{ border: phoneErrorColor && "2px solid green " }}
                />
                <span
                  style={{
                    color: phoneErrorColor ? "green" : "red",
                    marginRight: "auto",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginTop: "5px",
                  }}
                >
                  {phonenumberError}
                </span>
              </div>
              {/* <div>
              <label>Gender </label>
              <select
                onChange={(e) => genderInput(e)}
                value={gender}
                style={{ border: genderErrorColor && "2px solid green " }}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="binary">Non Binary</option>
              </select>
              <span
                style={{
                  color: genderErrorColor ? "green" : "red",
                  marginRight: "auto",
                  fontSize: "12px",
                  fontStyle: "italic",
                  marginTop: "5px",
                }}
              >
                {genderError}
              </span>
            </div> */}
              <div>
                <label>You will attend ? </label>
                <select
                  onChange={(e) => attendInput(e)}
                  value={attend}
                  style={{ border: attendErrorColor && "2px solid green " }}
                >
                  <option value="">Select</option>
                  <option value="traditional">Tradition Marriage</option>
                  <option value="white">White Wedding</option>
                  <option value="Both">Both</option>
                </select>
                <span
                  style={{
                    color: attendErrorColor ? "green" : "red",
                    marginRight: "auto",
                    fontSize: "12px",
                    fontStyle: "italic",
                    marginTop: "5px",
                  }}
                >
                  {attendError}
                </span>
              </div>
              <div>
                <label style={{ textAlign: "center" }}>
                  Will you be coming with a Spouse? If "YES" enter Spouse Name
                  else leave blank
                </label>
                <input
                  type="text"
                  placeholder="Enter Spouse Name"
                  value={spouse}
                  onChange={(e) => spouseInput(e)}
                />
              </div>

              <Link to="/dynamic">
                {submitBtn && (
                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={postUsers}
                  >
                    SUBMIT
                  </button>
                )}
              </Link>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
