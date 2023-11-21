"use client";
import React from "react";
import { Drawer } from "@material-tailwind/react";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <header>
      <div className="container-fluid">
        <div className="d-flex">
          <div className="w-25">
            <div className="links">
              <a onClick={openDrawer} className="px-1 show-menu">
                <span className="line-1" />
                <span className="line-2" />
                <span className="text">MENU</span>
              </a>
            </div>
            <Drawer open={open} onClose={closeDrawer}>
              <div className="menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="products.html">Products</a>
                  </li>
                  <li>
                    <a href="login.html">Order Now</a>
                  </li>
                  <li>
                    <a href="suppliers.html">Our Suppliers</a>
                  </li>
                  <li>
                    <a href="login.html">Cotton Price</a>
                  </li>
                  <li>
                    <a href="our-strength.html">Our Strength</a>
                  </li>
                  <li>
                    <a href="vision-mission.html">Vision &amp; Mission</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                </ul>{" "}
              </div>
            </Drawer>
          </div>
          <div className="w-50 text-center">
            <a href="index.html" className="logo">
              <img src="public/img/logo.png" title alt className />
            </a>
          </div>
          <div className="w-25 text-right">
            <div className="links">
              <a href="login.html">
                <img src="public/img/user.png" title alt className width={42} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
