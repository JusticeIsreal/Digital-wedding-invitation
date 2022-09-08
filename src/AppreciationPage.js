import Qrcode from "qrcode";
import { useParams } from "react-router-dom";
// import html2canvas from "html2canvas";
import { useContext } from "react";
import AppContext from "..//src/AppProvider";
import { useEffect, useState } from "react";
let site = "https://jenniferjustice2022.vercel.app/dynamic";

function AppreciationPage({ ff }) {
  const { id } = useParams();
  const [src, setSrc] = useState("");

  const { people } = useContext(AppContext);
  let oo = people.filter((w) => w.id === id);

  // console.log(oo);
  // console.log(id);

  useEffect(() => {
    Qrcode.toDataURL(site).then((data) => {
      setSrc(data);
    });
  }, []);

  //   const saveIv = () => {
  //     html2canvas(document.body).then((canvas) => {
  //       var newFile = document.createElement("newFile");
  //       newFile.href = canvas
  //         .toDataURL(" assets/image/jpeg")
  //         .replace("image/jpeg", "image/octet-stream");
  //       newFile.download = "JJ2022.jpg";
  //       newFile.click();
  //       console.log(newFile);
  //       //   document.body.appendChild(canvas);
  //     });
  //   };
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
        {ff.map((rr) => (
          <h1
            key={rr.id}
            style={{
              textTransform: "uppercase",
              color: "goldenrod",
              marginTop: "15px",
              textAlign: "center",
              wordBreak: "break-word",
            }}
          >
            {rr.name}
          </h1>
        ))}
        <p style={{ textTransform: "uppercase", marginTop: "30px" }}>
          We are honored to have you
        </p>
        <p style={{ marginTop: "-5px" }}>and look forward to see you</p>
        <h5
          style={{ textAlign: "center", color: "goldenrod", marginTop: "15px" }}
        >
          A seat would be reserved for you at Table:
          <br></br>
          {ff.map((ee) => (
            <span key={ee.id} style={{ color: "black", fontSize: "25px" }}>
              {ee.seatNo}
            </span>
          ))}
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
    </div>
  );
}

export default AppreciationPage;
