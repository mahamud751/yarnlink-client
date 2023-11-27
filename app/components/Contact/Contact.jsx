import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row text-left text-dark">
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 py-3 text-left row">
            <div className="col-sm-12 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38733.71232704082!2d75.82681428881908!3d30.897602032168532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1648283879855!5m2!1sen!2sin"
                width="100%"
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-sm-6 mb-3">
              <div className="p-4 border radius-8 bg-white">
                <h4>Umbrella Global Corporation</h4>
                <hr />
                <p>
                  <b>India Office </b>
                </p>
                <p>701, K 10 Tower, Feroze Gandhi market, Ludhiana.</p>
                <p>
                  <b>Bangladesh Office</b>
                </p>
                <p>H 618, Road 9, Block 1, Bashundhara, Dhaka.</p>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="p-4 border radius-8 bg-white">
                <i className="fa fa-phone" /> <b>Call Us</b> <br />
                <a href="tel://91-99151-51191">91-99151-51191</a>
                <hr />
                <i className="fa fa-envelope" /> <b>Say Hello</b> <br />
                <a href="mailto:support@umbrellaglobal.org">
                  support@umbrellaglobal.org
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 py-3">
            <h4>Have a query ? Feel free to ask us</h4>
            <hr className="col-sm-1 my-3 mx-0" />
            <form
              method="post"
              action="https://www.umbrellaglobal.org/contact-us"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="KgvbWDJZDDwud524LbE5WM5ynJwTQuhfyLSb8unR"
              />{" "}
              <div className="row my-3">
                <div className="form-group col-sm-4">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="form-control p-3"
                    required
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="form-control p-3"
                    required
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label>Your Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Your Mobile"
                    className="form-control p-3"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label>Message *</label>
                  <textarea
                    placeholder="Message *"
                    rows={5}
                    required
                    name="message"
                    className="form-control rounded-0 p-3"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group col-sm-12 mx-auto">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6Lcjb78UAAAAAIl2fokM1Ap0XAI4QfJ9WOyCE1Ql"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <button type="submit" className="btn btn-sm btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
