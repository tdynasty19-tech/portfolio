import React from 'react'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default function SkillList() {

    const settings = {
        dots: true,
        arrow:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const Slider = SlickSlider.default ? SlickSlider.default : SlickSlider;
  return (
  <>
    <h1
      style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#1f2937",
      }}
    >
      My Skills
    </h1>

    <Slider {...settings}>
      <div>
        <div
          style={{
            backgroundColor: "#e8f1ff",
            color: "#1f2937",
            height: "220px",
            margin: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/color/96/html-5--v1.png"
            alt="HTML"
          />
          <h2>HTML</h2>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#e8f1ff",
            color: "#1f2937",
            height: "220px",
            margin: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/color/96/css3.png"
            alt="CSS"
          />
          <h2>CSS</h2>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#e8f1ff",
            color: "#1f2937",
            height: "220px",
            margin: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/?size=96&id=TpULddJc4gTh&format=png"
            alt="C++"
          />
          <h2>C++</h2>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#e8f1ff",
            color: "#1f2937",
            height: "220px",
            margin: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/color/96/javascript--v1.png"
            alt="JavaScript"
          />
          <h2>JavaScript</h2>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#e8f1ff",
            color: "#1f2937",
            height: "220px",
            margin: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/color/96/react-native.png"
            alt="React"
          />
          <h2>React</h2>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#e8f1ff",
            color: "#1f2937",
            height: "220px",
            margin: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.icons8.com/color/96/python--v1.png"
            alt="Python"
          />
          <h2>Python</h2>
        </div>
      </div>
    </Slider>
  </>
)
}