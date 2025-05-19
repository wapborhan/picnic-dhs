import Nav from "./header/NavMenu";

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout2">
      {/* <div
        className="widget-area"
        data-bg-src="assets/img/bg/bg-footer.png"
        style={{
          backgroundImage: `url("${FootBG}")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-auto col-md-12">
              <div className="widget footer-widget">
                <div className="vs-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <img src="assets/img/logo-white2.png" alt="Evona" />
                    </a>
                  </div>
                  <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua ipsum
                    suspendisse
                  </p>
                  <a href="shop.html" className="vs-btn btn-white">
                    Buy Ticket
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-auto col-md-6 order-3 order-lg-0">
              <div className="widget footer-widget widget_nav_menu">
                <h4 className="widget_title">Contact</h4>
                <ul className="menu">
                  <li>
                    <a href="mailto:info@evona.com">info@evona.com</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps">
                      259 Media Hall, NYC 12503
                    </a>
                  </li>
                  <li>
                    <a href="tel:+2152351563">+(215) 235 1563</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row align-items-center mx-5">
            <div className="col-lg-6">
              <p className="copyright">
                সাইট ডিজাইন করেছেন{" "}
                <a
                  target="_BLANK"
                  href="https://www.wapborhan.com/"
                  style={{
                    textDecoration: "underline !important",
                    fontWeight: 900,
                  }}
                >
                  বোরহান উদ্দিন
                </a>
              </p>
            </div>
            <div className="col-lg-6 text-end d-none d-lg-block">
              <div className="footer-bottom-menu">
                <Nav />
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="scrollToTop scroll-btn style2">
          <i className="far fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
