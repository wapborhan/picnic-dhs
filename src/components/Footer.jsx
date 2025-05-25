import Nav from "./header/NavMenu";

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout2">
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
