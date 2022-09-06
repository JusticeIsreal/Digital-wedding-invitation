import Qrcode from "qrcode";

function AppreciationPage() {
  let site = "https://jenniferjustice2022.vercel.app/";

  return (
    <div className="dynamicPage-container">
      <div className="dynamicimg">
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1662503212/My%20portfolio%20Project/WhatsApp_Image_2022-09-06_at_11.15.23_PM_rg909r.jpg"
          alt=""
        />
      </div>
      <div className="thanks-message">
        <h1>THANK YOU</h1>
        <p>We are honored to have you</p>
        <h2 style={{ textTransform: "uppercase", color: "goldenrod" }}>
          Patricia Osaro
        </h2>
        <p>and we look forward to see you</p>
        <h4>A seat would be reserved for you</h4>
        <div className="barcode">
          <img
            src="https://res.cloudinary.com/isreal/image/upload/v1662505949/My%20portfolio%20Project/QR_code_for_mobile_English_Wikipedia.svg-removebg-preview_xgvr22.png"
            alt=""
          />
        </div>
        <p>kindly download this page by clicking on the button below</p>
        <div>
          <button>DOWNLOAD PASS</button>
        </div>
      </div>
    </div>
  );
}

export default AppreciationPage;
