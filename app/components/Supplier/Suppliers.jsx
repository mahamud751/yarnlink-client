import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState();
  const fetchSupplier = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/supplier")
      .catch((err) => {
        err;
      });
    setSuppliers(response.data);
  };

  useEffect(() => {
    fetchSupplier();
  }, []);
  return (
    <div>
      <section className="container py-5">
        <div className="row">
          {suppliers?.map((supplier) => (
            <div
              className="col-lg-2 col-md-3 col-sm-12 text-center mb-3"
              key={supplier._id}
            >
              <div className="img-item">
                <Image
                  width={630}
                  height={220}
                  src={`${supplier?.photos}`}
                  alt={supplier?.name || "health cat"}
                  className="img-fluid"
                />
              </div>
              <h4 className="title mx-3">{supplier?.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Suppliers;
