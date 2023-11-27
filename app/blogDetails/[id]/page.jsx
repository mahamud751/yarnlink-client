"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogDetails = ({ params: { id } }) => {
  const [blog, setBlog] = useState();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://yarnlink-server.onrender.com/api/blogs/${id}`)
      .catch((err) => {});
    setBlog(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);
  const [blogs, setBlogs] = useState();
  const fetchAllBlogs = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/blogs")
      .catch((err) => {});
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8 col-sm-12">
            <p className="mt-2 mb-2">
              Published On: Nov 26, 2022 by{" "}
              <span className="text-primary">Yarn</span>
            </p>
            <div className="text-center mb-3">
              {/* <Image
                width={630}
                height={220}
                src={`${blog?.photos}`}
                alt={blog?.name || "health cat"}
                style={{
                  borderRadius: 10,
                }}
                className="img-fluid"
              /> */}
              <img src={`${blog?.photos}`} alt="blog" className="img-fluid" />
            </div>
            <div className="text-justify my-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.desc,
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h5 className="mb-3">Current Trends</h5>
            <ul className="list-group">
              {blogs?.map((item) => (
                <li className="list-group-item p-3" key={item._id}>
                  <div className="media">
                    <div
                      className="w-25 mr-3 rounded"
                      style={{
                        background: `url(${item?.photos})`,
                        backgroundSize: "contain",
                        height: 80,
                      }}
                    />
                    <div className="media-body">
                      <Link
                        href={`/blogDetails/${item._id}`}
                        className="text-dark"
                      >
                        <h6 className="mt-0 mb-1">{item?.name}</h6>
                      </Link>
                      <div className="text-primary mt-2">
                        Published On: 26 <span>Nov, 22</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
