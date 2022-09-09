import Qrcode from "qrcode";
import { Table } from "@mantine/core";
// import { useParams } from "react-router-dom";
// import html2canvas from "html2canvas";
import { useContext } from "react";
import AppContext from "..//src/AppProvider";
import { useEffect, useState } from "react";
let site = "https://jenniferjustice2022.vercel.app/dynamic";

function AppreciationPage({ users, list }) {
  const { name, phonenumber, attend, spouse } = useContext(AppContext);

  // usestate to manage QRcode
  const [src, setSrc] = useState("");

  useEffect(() => {
    Qrcode.toDataURL(site).then((data) => {
      setSrc(data);
    });
  }, []);
  let coun = 1;
  const reFresh = (e) => {
    // coun++;
    // window.location.reload();
    // e.preventDefault();
  };

  useEffect(() => {
    return () => {
      reFresh();
    };
  }, []);

  return (
    <div className="dynamicPage-container">
      <div className="dynamicimg">
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1662503212/My%20portfolio%20Project/WhatsApp_Image_2022-09-06_at_11.15.23_PM_rg909r.jpg"
          alt=""
        />
      </div>
      <div className="thanks-message">
        <h2 style={{ textTransform: "uppercase" }}>THANK YOU</h2>
        <h1
          style={{
            textTransform: "uppercase",
            color: "goldenrod",
            marginTop: "15px",
            textAlign: "center",
            wordBreak: "break-word",
          }}
        >
          {list[0].name}
        </h1>

        <p style={{ textTransform: "uppercase", marginTop: "30px" }}>
          We are honored to have you
        </p>
        <p style={{ marginTop: "-5px" }}>and look forward to see you</p>
        <h5
          style={{ textAlign: "center", color: "goldenrod", marginTop: "15px" }}
        >
          A seat would be reserved for you at Table:
          <br></br>
          <span style={{ color: "black", fontSize: "25px" }}>
            {list[0].seat}
          </span>
        </h5>
        <div className="barcode">
          <img src={src} alt="" />
        </div>
        <p
          style={{ textAlign: "center", fontStyle: "italic", fontSize: "12px" }}
        >
          kindly take a screenshot of this page
        </p>
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "10px",
            position: "absolute",
            bottom: "-5px",
            color: "goldenrod",
          }}
        >
          courtesy:The bride and Groom
        </p>
      </div>
      {/* {users.length === 0 ? (
        <h1>Loading ...</h1>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Attend</th>
              <th>Spouse</th>
              <th>Table</th>
            </tr>
          </thead>
          <tbody>
            {users.map((element, index) => (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.phoneNumber}</td>
                <td>{element.attend}</td>
                <td>{element.spouse}</td>
                <td>{element.seat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )} */}
    </div>
  );
}

export default AppreciationPage;
