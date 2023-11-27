"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function Sliders() {
  const [category, setCategory] = useState();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/banner")
      .catch((err) => {
        err;
      });
    setCategory(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Carousel className="rounded-xl">
      {category?.map((item) => (
        <div className="relative h-full w-full" key={item._id}>
          <Image
            width={600}
            height={550}
            src={`${item.photos}`}
            alt={item?.name || "health cat"}
            style={{ width: "100%", height: "550px", objectFit: "cover" }}
          />

          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {item.name}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {item.desc}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
