import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function FirstPage() {
  const fadeImage = [
    {
      id: 1,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146667/IMG_4639_aalrms.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4639_aalrms.jpg",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121726/IMG_7758_qkzyho.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7758_qkzyho.jpg",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146585/IMG_4593_qmo1kq.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4593_qmo1kq.jpg",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146670/IMG_4642_u8tuwp.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4642_u8tuwp.jpg",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121660/IMG_7652_fgpa5p.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7652_fgpa5p.jpg",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146605/IMG_4623_se44fk.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4623_se44fk.jpg",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146673/IMG_4643_s4szdp.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4643_s4szdp.jpg",
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121674/IMG_7669_be06x4.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7669_be06x4.jpg",
    },
    {
      id: 9,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146598/IMG_4595_xsskjg.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4595_xsskjg.jpg",
    },

    {
      id: 10,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146668/IMG_4640_nuzqrp.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4640_nuzqrp.jpg",
    },
    {
      id: 11,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121649/IMG_7664_xri1g4.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7664_xri1g4.jpg",
    },
    {
      id: 12,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146661/IMG_4637_q9ohtd.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4637_q9ohtd.jpg",
    },
    {
      id: 13,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146606/IMG_4624_fjqjuy.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4624_fjqjuy.jpg",
    },
    {
      id: 14,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121624/IMG_7590_1_hofn8v.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7590_1_hofn8v.jpg",
    },
    {
      id: 15,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146653/IMG_4636_nqytv8.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4636_nqytv8.jpg",
    },
    {
      id: 16,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146622/IMG_4635_aiqqnk.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4635_aiqqnk.jpg",
    },
    {
      id: 17,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121639/IMG_7646_in0o4x.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7646_in0o4x.jpg",
    },
    {
      id: 18,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665146593/IMG_4594_nuyehh.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_4594_nuyehh.jpg",
    },
    {
      id: 19,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121683/IMG_7686_1_tq8mav.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7686_1_tq8mav.jpg",
    },
    {
      id: 20,
      img: "https://res.cloudinary.com/isreal/image/upload/v1665121720/IMG_7749_focd5j.jpg",
      download:
        "https://res.cloudinary.com/isreal/image/upload/fl_attachment:JJ2022/IMG_7749_focd5j.jpg",
    },
  ];

  return (
    <div
      style={{
        border: "5px solid goldenrod",
        padding: "5px",
        borderRadius: "10px",
        // width: "100vw",
        overflow: "hidden",
      }}
    >
      <Fade>
        {fadeImage.map((fadeImage, index) => (
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
          // border: "2px solid green",
          margin: "0 auto",
          padding: "0 5px",
        }}
      >
        {fadeImage.map((fadeImage, index) => (
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
      <div className="each-fade">
        <div
          className="image-container"
          style={{
            width: "330px",
            margin: "0 auto",
            backgroundColor: "whitesmoke",
            // border: "1px solid red",
            height: "410px",
            borderRadius: "5px",
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
