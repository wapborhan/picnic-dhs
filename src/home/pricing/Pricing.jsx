import React from "react";

const Pricing = () => {
  return (
    <section className="space-shape mt-n75 z-index-4">
      <div
        className="shape-bg"
        data-bg-src="assets/img/bg/cta_bg_1.png"
        style={{
          background: "url(assets/img/bg/cta_bg_1.png) no-repeat",
          backgroundRepeat: "no-repeat !important",
        }}
      ></div>
      <div className="container text-center z-index-common">
        <div className="event-info text-white mb-30">
          <span>
            <i className="fal fa-calendar-alt"></i>ঈদের তৃতীয় দিন
          </span>
          <span>
            <i className="fal fa-map-marker-alt"></i>ধরমপুর মাধ্যমিক বিদ্যালয়
            খেলার মাঠ।
          </span>
        </div>
        <h1 className="sec-title text-white mb-5">
          পিকনিক! পিকনিক!! পিকনিক!!!
        </h1>
        <h3 style={{ color: "#fff" }}>তোমার জন্য আমরা অপেক্ষায়..</h3>
        <h4 style={{ color: "#fff" }}>
          অংশগ্রহণের যোগ্যতাঃ ধরমপুর মাধ্যমিক বিদ্যালয়ের যে কোন ব্যাচের
          শিক্ষার্থী।
        </h4>
        <h4 style={{ color: "#fff" }}>
          রেজিস্ট্রেশন ফিঃ সর্বনিম্ন ৩৫০ টাকা। তার বেশি যে যা পারে।
        </h4>
        {/* 
        <a href="shop.html" className="vs-btn btn-white">
          Buy Your Ticket
        </a> */}
      </div>
      <div
        className="shape-mockup jump z-index-3 d-none d-lg-block"
        data-top="44%"
        data-left="6%"
      >
        <img src="assets/img/shape/multi-plus-2.png" alt="shapes" />
      </div>
      <div
        className="shape-mockup jump-reverse z-index-3 d-none d-lg-block"
        data-bottom="40%"
        data-right="0%"
      >
        <img src="assets/img/shape/line-10.png" alt="shapes" />
      </div>
    </section>
  );
};

export default Pricing;
