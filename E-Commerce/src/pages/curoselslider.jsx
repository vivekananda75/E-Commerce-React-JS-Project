import React from "react";
import { SliderData } from "../DataFile/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Curoselslider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container my-4">
      <Slider {...settings}>
        {SliderData.map((item) => (
          <div key={item.id}>
            <div className="row align-items-center p-5  rounded ">
              <div className="col-md-6">
                <h2 className="mb-3">{item.title}</h2>
                <p className="text-muted">{item.desc}</p>
                <button style={{border:0}}>Visit collection </button>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="img-fluid"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
