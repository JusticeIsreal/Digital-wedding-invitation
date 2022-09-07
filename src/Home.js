import "./App.css";
import { FaTimes } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "..//src/AppProvider";

function Home() {
  const {
    formshow,
    showFrom,
    nameInput,
    phoneNumberInput,
    genderInput,
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
  } = useContext(AppContext);

  // console.log(name);
  // console.log(phonenumber);
  // console.log(attend);
  // console.log(gender);
  // console.log(spouse);
  useEffect(() => {
    return () => {
      btn();
    };
  }, [name, name, phonenumber, attend, gender]);
  return (
    <div className="iv-card">
      <div className="pick-table">
        {togglebtn && <button onClick={showFrom}>RESERVE A SEAT</button>}
      </div>
      {formshow && (
        <div className="form">
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
              <label>Name :</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => nameInput(e)}
              />
            </div>
            <div>
              <label>Phone No.:</label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                value={phonenumber}
                onChange={(e) => phoneNumberInput(e)}
              />
            </div>
            <div>
              <label>Gender </label>
              <select onChange={(e) => genderInput(e)} value={gender}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="binary">Non Binary</option>
              </select>
            </div>
            <div>
              <label>You will attend ? </label>
              <select onChange={(e) => attendInput(e)} value={attend}>
                <option value="">Select</option>
                <option value="traditional">Tradition Marriage</option>
                <option value="white">White Wedding</option>
                <option value="Both">Both</option>
              </select>
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
            {/* <Link to="dynamic"> */}
            {submitBtn && (
              <button type="button" className="submit-btn">
                SUBMIT
              </button>
            )}
            {/* </Link> */}
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;
