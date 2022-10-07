import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function FirstPage() {
  const fadeImages = [
    {
      id: 21,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121674/IMG_7669_be06x4.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:my_custom_filename/IMG_7669_be06x4.jpg",
    },
    {
      id: 1,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121443/prewed8_tygopq.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed8_tygopq.jpg",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121598/prewed9_tgsaig.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed9_tgsaig.jpg",
    },
    {
      id: 22,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146673/IMG_4643_s4szdp.heic",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7749_focd5j.jpg",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121720/IMG_7749_focd5j.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7749_focd5j.jpg",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121515/prewed2_aqum47.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed2_aqum47.jpg",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121519/prewed3_zursg2.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed3_zursg2.jpg",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121726/IMG_7758_qkzyho.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7758_qkzyho.jpg",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121593/prewed6_rnuplp.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed6_rnuplp.jpg",
    },
    {
      id: 70,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146622/IMG_4635_aiqqnk.heic",
      download:
        "https://res.cloudinary.com/isreal/image/upload/v1665146622/IMG_4635_aiqqnk.heic",
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121520/prewed4_hgns8t.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed4_hgns8t.jpg",
    },
    {
      id: 9,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121700/IMG_7686_fd67dt.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7686_fd67dt.jpg",
    },
    {
      id: 10,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121606/prewed12_vbilm0.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed12_vbilm0.jpg",
    },
    {
      id: 11,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121660/IMG_7652_fgpa5p.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7652_fgpa5p.jpg",
    },
    {
      id: 12,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121523/prewed5_ggv71u.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed5_ggv71u.jpg",
    },
    {
      id: 13,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121649/IMG_7664_xri1g4.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7664_xri1g4.jpg",
    },
    {
      id: 14,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121660/IMG_7652_fgpa5p.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7652_fgpa5p.jpg",
    },
    {
      id: 15,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121601/prewed10_nv92oi.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed10_nv92oi.jpg",
    },
    {
      id: 16,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121523/prewed5_ggv71u.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/prewed5_ggv71u.jpg",
    },
    {
      id: 17,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121624/IMG_7590_1_hofn8v.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7590_1_hofn8v.jpg",
    },
    {
      id: 18,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121624/IMG_7590_1_hofn8v.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7590_1_hofn8v.jpg",
    },
    {
      id: 19,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121639/IMG_7646_in0o4x.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7646_in0o4x.jpg",
    },
    {
      id: 20,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121649/IMG_7664_xri1g4.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7664_xri1g4.jpg",
    },
  ];

  return (
    <div>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <ImgDisplay key={index} {...fadeImage} />
        ))}
      </Fade>
      <h2 style={{ textAlign: "center" }}>JJ'2022</h2>
      <div
        style={{
          width: "350px",
          display: "flex",
          //   height: "100%",
          //   justifyContent: "center",
          //   alignItems: "center",
          overflowX: "scroll",
          //   border: "2px solid green",
          margin: "0 auto",
          padding: "0 5px",
        }}
      >
        {fadeImages.map((fadeImage, index) => (
          <ImgDownload key={index} {...fadeImage} />
        ))}
      </div>
      <div
        style={{
          margin: "0 auto",
          width: "300px",
          //   border: "1px solid red",
          display: "flex",
          padding: "15px 0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/home">
          <button style={{ margin: "0 auto", padding: "10px" }}>
            CLICK HERE TO RESERVE A SEAT
          </button>
        </Link>
      </div>
    </div>
  );
}

function ImgDisplay({ img }) {
  return (
    <>
      {" "}
      <div className="each-fade">
        <div
          className="image-container"
          style={{
            width: "330px",
            margin: "0 auto",
            backgroundColor: "whitesmoke",
          }}
        >
          <img src={img} style={{ width: "100%", borderRadius: "3px" }} />
        </div>
      </div>
    </>
  );
}
function ImgDownload({ img, download }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        margin: "5px",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "100%",
          margin: "3px",
          borderRadius: "3px",
        }}
      >
        <img
          src={img}
          style={{ width: "100%", height: "100%", borderRadius: "3px" }}
        />
      </div>
      <button style={{ width: "100px", marginTop: "auto" }}>
        <a href={download}>Download</a>
      </button>
    </div>
  );
}

export default FirstPage;
