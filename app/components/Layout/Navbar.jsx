"use client";
import React, { useContext } from "react";
import { Drawer } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

import { AuthContext } from "../../contexts/UserProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUser();
  };
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
                <div className="flex justify-end ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 512 512"
                    style={{
                      color: "red",
                      marginRight: 20,
                      marginTop: 10,
                      cursor: "pointer",
                    }}
                    onClick={closeDrawer}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                  </svg>
                </div>
                <ul>
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link href={"/products"}>Products</Link>
                  </li>
                  <li>
                    <a href="login.html">Order Now</a>
                  </li>
                  <li>
                    <Link href={"/suppliers"}>Our Suppliers</Link>
                  </li>
                  <li>
                    <Link href="login.html">Cotton Price</Link>
                  </li>
                  <li>
                    <Link href="/strength">Our Strength</Link>
                  </li>
                  <li>
                    <Link href="/vision-mission">Vision &amp; Mission</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href={"/blogs"}>Blog</Link>
                  </li>
                </ul>{" "}
              </div>
            </Drawer>
          </div>
          <div className="w-50 text-center">
            <Link href="/" className="logo">
              <img src="ss" title alt className />
            </Link>
          </div>
          <div className="w-25 text-right">
            {user?.name}
            <div className="links">
              <Link href="/login">
                <img src="public/img/user.png" title alt className width={42} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
