import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/product")
      .catch((err) => {
        err;
      });
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <section className="container py-5">
        <div className="row">
          {products?.map((product) => (
            <div
              className="col-lg-2 col-md-3 col-sm-12 text-center mb-3"
              key={product._id}
            >
              <div className="img-item">
                <Image
                  width={230}
                  height={220}
                  src={`${product.photos}`}
                  alt={product?.name || "health cat"}
                  style={{
                    width: "100%",
                    height: "220px",
                    borderRadius: 10,
                  }}
                  className="img-fluid"
                />
              </div>
              <h4 className="title mx-3">{product?.name}</h4>
              <a
                href="login.html?pid=14"
                className="btn btn-warning mt-2 btn-sm"
              >
                <i className="fa fa-rocket mr-2" /> Order Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
