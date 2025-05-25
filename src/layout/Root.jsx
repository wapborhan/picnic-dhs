import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/header/MobileMenu";
import { useEffect, useState } from "react";

const Root = () => {
  const location = useLocation();
  const [menuShow, setMenuShow] = useState(false);
  const toggleMenu = () => {
    setMenuShow(!menuShow);
  };

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <MobileMenu menuShow={menuShow} toggleMenu={toggleMenu} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
