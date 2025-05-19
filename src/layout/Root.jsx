import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/header/MobileMenu";
import { useState } from "react";

const Root = () => {
  const [menuShow, setMenuShow] = useState(false);
  const toggleMenu = () => {
    setMenuShow(!menuShow);
  };
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
