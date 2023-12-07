import React from "react";
import Link from "next/link";
import UseFetch from "../../hooks/useFetch";
const Footer = () => {
  const { data: support } = UseFetch("support");
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-middle">
            <div className="row">
              <div className="col-sm-5">
                <h3 className="title">Exclusive Offers</h3>
                <p>Sign up to our newsletter to receive our latest offers</p>
                <form className="d-flex newsletter">
                  <input
                    type="text"
                    className="form-control w-75"
                    required
                    placeholder="Enter your email"
                  />
                  <input
                    className="btn btn-warning text-center w-25"
                    defaultValue="Submit"
                    type="submit"
                  />
                </form>
              </div>
              <div className="col-sm-3">
                <div className="need-help">
                  <h3 className="title">Need Help ? </h3>
                  {support?.map((item) => (
                    <>
                      <p key={item._id}>
                        <i className="fa fa-envelope mr-1" /> {item?.email}
                      </p>
                      <p>
                        <i className="fa fa-headphones mr-1" /> {item?.number}
                      </p>
                    </>
                  ))}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="social-icon">
                  <h3 className="title">Connect with us</h3>
                  <a href="#" className="social d-none">
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/umbrella-global-corporation/"
                    className="social"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="row">
              <div className="col-sm-3 my-3">
                <h3 className="title">Company</h3>
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/strength">Our Strength</Link>
                  </li>
                  <li>
                    <Link href="/vision-mission">Vision &amp; Mission</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 my-3">
                <h3 className="title">More Links</h3>
                <ul>
                  <li>
                    <Link href="/">My Account</Link>
                  </li>
                  <li>
                    <Link href="/">Cotton Prices</Link>
                  </li>

                  <li>
                    <Link href="/suppliers">Our Suppliers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 my-3">
                <h3 className="title">Mobile App</h3>
                <ul>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=org.umbrella.app"
                      target="_blank"
                    >
                      Android App
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://apps.apple.com/in/app/umbrella-global/id6444061440"
                      target="_blank"
                    >
                      iOS App
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <p className="m-0 text-center">
            YarnLink Global is equipped with professionals specially trained for
            providing sourcing and quality assurance to our clients
          </p>
          <hr />
          <div className="copy-right text-center mt-5">
            <p>© 2023 YarnLink | All Rights Reserved </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
