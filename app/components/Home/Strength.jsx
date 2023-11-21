import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Strength = () => {
  const [category, setCategory] = useState();
  const fetchStrength = async () => {
    const response = await axios
      .get("http://localhost:5001/api/strength")
      .catch((err) => {
        err;
      });
    setCategory(response.data);
  };

  useEffect(() => {
    fetchStrength();
  }, []);
  return (
    <div className="container py-5">
      <h2 className="heading text-center">Our Strength</h2>
      <div className="row">
        {category?.map((item) => (
          <div className="col-sm-3 p-3" key={item._id}>
            <div className="adv-div">
              <Image
                width={230}
                height={220}
                src={`${item.photos}`}
                alt={item?.name || "health cat"}
                style={{
                  borderRadius: 10,
                }}
                className="img-fluid"
              />

              <h4>{item?.name}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
