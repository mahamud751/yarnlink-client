"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Slider = () => {
  const [category, setCategory] = useState();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5001/api/banner")
      .catch((err) => {
        err;
      });
    setCategory(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(category);
  return (
    <div>
      {" "}
      <Splide
        options={{
          // type: "loop",
          arrows: true,
          rewind: true,
          drag: "free",
          autoplay: true,
          gap: "1rem",
          perPage: 1,
          height: "32rem",
          pagination: false,
          breakpoints: {
            1200: { arrows: true, perPage: 4 },
            800: { arrows: true, perPage: 2 },
            640: { arrows: true, perPage: 1, height: "30rem" },
          },
        }}
      >
        {category?.map((item) => (
          <SplideSlide>
            <div
              id=""
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#mainSlider"
                  data-slide-to={0}
                  className="active"
                />
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item  active ">
                  <img src={item.photos} alt="" />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#mainSlider"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#mainSlider"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
              <h1 className="slider-tagline">
                One stop shop for all <span>your yarn requirements</span>
              </h1>
              <div className="slider-text">
                <span>PASSION TO SERVE</span>
                <p>
                  We work as your most loyal associate and handle your sourcing
                  and marketing while you focus on your business.{" "}
                </p>
                <a href="products.html">View Catalog</a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
