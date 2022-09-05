import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="iv-card">
        <div className="pick-table">
          <button>RESERVE A SEAT</button>
        </div>
        <div className="form">
          <form>
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
                <option value="" key="">
                  Select
                </option>
                <option value="Tradition Marriage" key="">
                  Tradition Marriage
                </option>
                <option value="White Wedding" key="">
                  White Wedding
                </option>
                <option value="Both" key="">
                  Both
                </option>
              </select>
            </div>
            <div>
              <label>
                Will you be coming with a Spouse? If enter Spouse Name else
                leave blank
              </label>
              <input type="text" placeholder="Enter Spouse Name" />
            </div>

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
