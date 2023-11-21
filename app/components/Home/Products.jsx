import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
const Products = () => {
  const [category, setCategory] = useState();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5001/api/product")
      .catch((err) => {
        err;
      });
    setCategory(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container py-5">
      <h1 className="heading">Range of Products</h1>
      <div className="py-3 position-relative">
        <div className="all_recommended">
          <Splide
            options={{
              type: "loop",
              arrows: true,
              rewind: true,
              drag: "free",
              autoplay: true,
              gap: "2rem",
              perPage: 6,
              height: "16rem",
              pagination: false,
              breakpoints: {
                1200: { arrows: true, perPage: 6 },
                800: { arrows: true, perPage: 2 },
                640: { arrows: true, perPage: 1, height: "30rem" },
              },
            }}
          >
            {category?.map((item) => (
              <SplideSlide>
                <div className="all_recommended">
                  <Image
                    width={230}
                    height={220}
                    src={`${item.photos}`}
                    alt={item?.name || "health cat"}
                    style={{
                      width: "100%",
                      height: "220px",
                      borderRadius: 10,
                    }}
                  />

                  <h4 className="title">100% Cotton Yarn</h4>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Products;
