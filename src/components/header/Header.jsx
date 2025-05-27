import Nav from "./NavMenu";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = ({ toggleMenu }) => {
  return (
    <header className="vs-header header-layout3">
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-phone"></i>যেকোনো তথ্যের জন্য কল করুন:{" "}
                    <a className="text-dark" href="tel:+8801766369931">
                      রবিন-01766-369931
                    </a>
                    {", "}
                    <a className="text-dark" href="tel:+8801770417810">
                      শিহাব-01770-417810
                    </a>
                    {", "}
                    <a className="text-dark" href="tel:+8801753546275">
                      মিঠুন-01753-546275
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links">
                <span className="header-links-title">Follow Us:</span>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/groups/School.Dharampur">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://chat.whatsapp.com/LjLjmsJBlOt8Z7tyKMRK6r">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        <div className="sticky-active">
          <div className="container">
            <div className="row gx-35 align-items-center">
              <div className="col-auto">
                <div className="header-logo">
                  <NavLink to="/">
                    পুনর্মিলনী
                    {/* <!-- <img src="assets/img/logo.png"
                                        alt="Evona"> --> */}
                  </NavLink>
                </div>
              </div>
              <div className="col">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                      <Nav />
                    </nav>
                  </div>
                  <div className="col d-block d-lg-none">
                    <button
                      type="button"
                      className="vs-menu-toggle"
                      onClick={toggleMenu}
                    >
                      <FaBars /> Menu
                    </button>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="header-button">
                      <Link
                        to="/registration"
                        className="vs-btn d-none d-xl-block"
                      >
                        রেজিস্ট্রেশন করুন
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
