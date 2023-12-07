import React from "react";
import Image from "next/image";
import Link from "next/link";
import UseFetch from "../../hooks/useFetch";
const Market = () => {
  const { data: blogs } = UseFetch("blogs");
  return (
    <div className="container pb-5">
      <h2 className="heading">
        Market Watch
        <a
          href="blog.html"
          className="btn btn-sm border-dark btn-site px-2 py-1 font-weight-bold float-right"
        >
          View All
        </a>
        <div className="clearfix" />
      </h2>
      <div className="row">
        <div className="col-md-7 col-sm-12 p-3">
          {blogs?.slice(0, 1).map((item) => (
            <Link
              href={item?.link ? item?.link : "/"}
              className="blog"
              key={item._id}
            >
              <div className="image">
                <Image
                  width={230}
                  height={220}
                  src={`${item?.photos[0]}`}
                  alt="market"
                  className="img-fluid w-full"
                />
              </div>
              <div className="date">
                26 <span>Nov, 22</span>
              </div>
              <h1>
                Cotton futures: Strong price fundamentals undermined by USD
                resurgence, dented demand
              </h1>
            </Link>
          ))}
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="row">
            {blogs?.slice(1, 5).map((item) => (
              <div className="col-md-6 col-sm-12 p-3" key={item._id}>
                <Link href={item?.link ? item?.link : "/"} className="blog">
                  <div className="image">
                    <Image
                      width={230}
                      height={220}
                      src={`${item?.photos[0]}`}
                      alt="market"
                      className="img-fluid w-full"
                    />
                  </div>
                  <div className="date">
                    26 <span>Nov, 22</span>
                  </div>
                  <h1>
                    Cotton futures: Strong price fundamentals undermined by USD
                    resurgence, dented demand
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
