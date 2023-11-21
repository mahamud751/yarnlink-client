import React from "react";
import Image from "next/image";
const Vision = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-3 p-3 position-relative border d-flex align-items-center bg-white">
          <div className="w-100">
            <h4>VISION</h4>
            <p>
              To become market leaders and reliable service provider through
              knowledge and innovation to meet tailor-made requirements of
              textiles.
            </p>
          </div>
        </div>
        <div className="col-sm-3 p-0 text-center">
          <Image
            width={330}
            height={280}
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlzaW9ufGVufDB8fDB8fHww"
            alt="vision"
            style={{
              height: "340px",
            }}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-3 p-3 position-relative border d-flex align-items-center bg-white">
          <div className="w-100">
            <h4>MISSION</h4>
            <p>
              Ensuring peace of mind and ease of business with our clients with
              timely deliveries of the best quality products.
            </p>
          </div>
        </div>
        <div className="col-sm-3 p-0 text-center">
          <Image
            width={320}
            height={220}
            src="https://images.unsplash.com/photo-1564353779909-9140fd426002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
            alt="vision"
            style={{
              height: "340px",
            }}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
