import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataDigitalBestSeller } from "./data";
import imgGirl from "./assets/img/card6.png";
import styled from "styled-components";

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <Wrapper>
      <div className="App">
        <div className="title">
          <h2>Best Sellers</h2>
          <p>Check out most promising product bought by our buyers</p>
        </div>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0 25px;
  .App {
    margin: 0 auto;
    margin-top: 135px;
  }

  .title {
    text-align: center;

    h2 {
      font-weight: 700;
      font-size: 60px;
      line-height: 69px;
      text-align: center;
      color: #323232;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #323232;
      opacity: 0.5;
      margin-top: 11px;
    }
  }

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }

  .card {
    background: black;
    margin-top: 53px;
    overflow: hidden;
    height: 100%;
    color: #fff;
    cursor: pointer;
  }

  .card-top h1 {
    font-size: 0.9rem;
    margin: 20px;
  }

  .card-top > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: black;
  }

  .card-bottom {
    margin: 10px 20px;
  }

  .category {
    position: relative;
  }
  .category::before {
    content: "";
    background: rgb(255, 61, 61);
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    height: 2px;
  }
`;
