import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Strength = () => {
  const [strength, setStrength] = useState();
  const fetchStrength = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/strength")
      .catch((err) => {
        err;
      });
    setStrength(response.data);
  };

  useEffect(() => {
    fetchStrength();
  }, []);
  return (
    <div>
      <div className="section-advantages">
        <div className="container py-5">
          <div className="row">
            {strength?.map((product) => (
              <div className="col-sm-3 p-3" key={product._id}>
                <div className="adv-div">
                  <Image
                    width={630}
                    height={220}
                    src={`${product?.photos}`}
                    alt={product?.name || "health cat"}
                    style={{
                      borderRadius: 10,
                    }}
                    className="img-fluid"
                  />
                  <h4>{product?.name}</h4>
                  <p>{product?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default Strength;
