import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState();
  const fetchStrength = async () => {
    const response = await axios
      .get("https://yarnlink-server.onrender.com/api/blogs")
      .catch((err) => {
        err;
      });
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchStrength();
  }, []);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {blogs?.map((blog) => (
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3" key={blog._id}>
              <Link href={`blogDetails/${blog._id}`} className="blog">
                <div className="image">
                  <Image
                    width={630}
                    height={220}
                    src={`${blog?.photos}`}
                    alt={blog?.name || "health cat"}
                    style={{
                      borderRadius: 10,
                    }}
                    className="img-fluid"
                  />
                </div>
                <div className="date">
                  26 <span>Nov, 22</span>
                </div>
                <h1>{blog?.name}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog?.desc.slice(0, 160),
                  }}
                />
                <p>...</p>
                <div className="btn">Read Full Article</div>
              </Link>
            </div>
          ))}

          <div className="text-center my-3" />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
