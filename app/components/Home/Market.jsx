import React from "react";
import Image from "next/image";
const Market = () => {
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
          <a
            href="blog/cotton-yarn-prices-down-in-south-india-slowdown-worries-industry.html"
            className="blog"
          >
            <div className="image">
              <Image
                width={230}
                height={220}
                src="https://images.unsplash.com/photo-1515420023373-9b7d43d4feb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="market"
                className="w-100 h-auto"
              />
            </div>
            <div className="date">
              26 <span>Nov, 22</span>
            </div>
            <h1>
              Cotton yarn prices down in south India; slowdown worries industry
            </h1>
          </a>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-12 p-3">
              <a
                href="blog/cotton-futures-strong-price-fundamentals-undermined-by-usd-resurgence-dented-demand.html"
                className="blog"
              >
                <div className="image">
                  <Image
                    width={230}
                    height={220}
                    src="https://plus.unsplash.com/premium_photo-1679430672086-cc953242f912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvdHRvbnxlbnwwfHwwfHx8MA%3D%3D"
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
              </a>
            </div>
            <div className="col-md-6 col-sm-12 p-3">
              <a
                href="blog/indias-cotton-exports-stall-as-farmers-delay-sales-hoping-for-higher-prices.html"
                className="blog"
              >
                <div className="image">
                  <Image
                    width={230}
                    height={220}
                    src="https://plus.unsplash.com/premium_photo-1682148929644-24e4a137c6aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvdHRvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="market"
                    className="img-fluid w-full"
                  />
                </div>
                <div className="date">
                  26 <span>Nov, 22</span>
                </div>
                <h1>
                  Indias cotton exports stall as farmers delay sales hoping for
                  higher prices
                </h1>
              </a>
            </div>
            <div className="col-md-6 col-sm-12 p-3">
              <a
                href="blog/high-prices-may-impact-india-cotton-exports.html"
                className="blog"
              >
                <div className="image">
                  <Image
                    width={230}
                    height={220}
                    src="https://images.unsplash.com/photo-1563136192-a4b2b5f977e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvdHRvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="market"
                    className="img-fluid w-full"
                  />
                </div>
                <div className="date">
                  26 <span>Nov, 22</span>
                </div>
                <h1>High prices may impact India cotton exports</h1>
              </a>
            </div>
            <div className="col-md-6 col-sm-12 p-3">
              <a
                href="blog/china-trade-decadelow-import-of-cotton-yarn-reflects-global-slowdown-in-clothing-demand.html"
                className="blog"
              >
                <div className="image">
                  <Image
                    width={230}
                    height={220}
                    src="https://plus.unsplash.com/premium_photo-1675799768509-54dd9304af1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvdHRvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="market"
                    className="img-fluid w-full"
                  />
                </div>
                <div className="date">
                  26 <span>Nov, 22</span>
                </div>
                <h1>
                  China trade: decade-low import of cotton yarn reflects ‘global
                  slowdown’ in clothing demand
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
