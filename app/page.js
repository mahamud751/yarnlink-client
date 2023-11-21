"use client";
import React from "react";
import { Sliders } from "./components/Home/Sliders";
import Products from "./components/Home/Products";
import Supplier from "./components/Home/Supplier";
import Strength from "./components/Home/Strength";
import Vision from "./components/Home/Vision";
import Yarn from "./components/Home/Yarn";
import Market from "./components/Home/Market";

const page = () => {
  return (
    <div id="app">
      <div className="d-flex">
        <div className="main-content">
          <div className="container position-relative">
            <Sliders />
          </div>
          <section className="section-products">
            <Products />
          </section>
          <section className="updates">
            <Market />
          </section>
          <section className="section-vision-mission">
            <Vision />
          </section>
          <section className="section-orderyarn">
            <Yarn />
          </section>
          <section className="section-suppliers">
            <Supplier />
          </section>
          <section className="section-advantages">
            <Strength />
          </section>

          {/* <a href="https://wa.me/919915151191" target="_blank" class="whatsapp"></a> */}
          {/* LOGIN MODAL */}
          <div className="modal fade" id="login">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h4 className="modal-title text-danger font-weight-bold">
                    Login
                  </h4>
                  <a
                    className="close"
                    href="javascript:void(0)"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" />
                  </a>
                </div>
                <div className="modal-body">
                  <form id="loginform">
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="KgvbWDJZDDwud524LbE5WM5ynJwTQuhfyLSb8unR"
                    />{" "}
                    <label>Email </label>
                    <input
                      type="email"
                      name="identity"
                      required
                      placeholder="Email"
                      className="form-control mb-3"
                    />
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      className="form-control mb-3"
                    />
                    <button
                      type="submit"
                      className="btn btn-danger btn-sm btn-block my-3 py-2 px-4 float-right text-uppercase"
                    >
                      Login{" "}
                    </button>
                    <div className="clearfix" />
                    <p />
                  </form>
                  <a
                    className="btn btn-link text-dark float-left"
                    href="register.html"
                  >
                    New? Register Here{" "}
                  </a>
                  <a
                    className="btn btn-link text-dark float-right"
                    href="password/reset.html"
                  >
                    Forgot Your Password?{" "}
                  </a>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          {/* Media Modal */}
          <div className="modal fade" id="media">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h4 className="modal-title text-danger font-weight-bold">
                    Media
                  </h4>
                  <a
                    className="close"
                    href="javascript:void(0)"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" />
                  </a>
                </div>
                <div className="modal-body"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="cart" className="main-cart" />
      </div>
    </div>
  );
};

export default page;
