import React, { Fragment } from "react";
import Banner from "./banner";
import About from "./about";
import WhyJoin from "./why-join";
import Team from "./team";
import Pricing from "./pricing/Pricing";
import EventDetails from "./event-details/EventDetails";
import Event from "./event/Event";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <About />
      <WhyJoin />
      <Event />
      <Pricing />
      <EventDetails />
      <Team />
    </Fragment>
  );
};

export default HomePage;
