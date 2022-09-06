import "./App.css";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "..//src/AppProvider";

function App() {
  const { formshow, showFrom } = useContext(AppContext);
  return (
    <div className="App">
      <div className="iv-card">
        <div className="pick-table">
          <button onClick={showFrom}>RESERVE A SEAT</button>
        </div>
        {formshow && (
          <div className="form">
            <form>
              <div className="cancel" onClick={showFrom}>
                <FaTimes />
              </div>
              <h3>This invitation only covers for a MAXIMUM 0F 2 PERSONS</h3>
              <div>
                <label>Name :</label>
                <input type="text" placeholder="Enter Full Name" />
              </div>
              <div>
                <label>Phone No.:</label>
                <input type="number" placeholder="Enter Phone Number" />
              </div>
              <div>
                <label>You will attend ? </label>
                <select>
                  <option value="">Select</option>
                  <option value="Tradition Marriage">Tradition Marriage</option>
                  <option value="White Wedding">White Wedding</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <label>
                  Will you be coming with a Spouse? If enter Spouse Name else
                  leave blank
                </label>
                <input type="text" placeholder="Enter Spouse Name" />
              </div>

              <button type="button" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
