import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { Card } from "@material-tailwind/react";

const Supplier = () => {
  const [category, setCategory] = useState();
  const fetchSupplier = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/supplier")
      .catch((err) => {
        err;
      });
    setCategory(response.data);
  };

  useEffect(() => {
    fetchSupplier();
  }, []);
  return (
    <div className="container py-5">
      <h2 className="heading text-center">Our Suppliers</h2>
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
              <SplideSlide key={item._id}>
                <div className="all_recommended">
                  <Card className="mt-6">
                    <Image
                      width={230}
                      height={220}
                      priority
                      src={`${item.photos}`}
                      alt={item?.name || "health cat"}
                      style={{
                        width: "220px",
                        height: "220px",
                        borderRadius: 10,
                        objectFit: "contain",
                      }}
                    />
                  </Card>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
