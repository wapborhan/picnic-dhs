const EventDetails = () => {
  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="title-area2 text-center">
          <span className="sub-title2">
            কোথায় হবে
            <img
              className="title-shape"
              src="assets/img/shape/title_shape.png"
              alt="title shape"
            />
          </span>
          <h2 className="sec-title">
            অনুষ্ঠানস্থলের দিকনির্দেশনা পান গুগল ম্যাপ এ
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-5 mb-35 mb-lg-0">
            <div
              className="location-card-wrap"
              data-bg-src="assets/img/bg/location_box_bg.jpg"
              style={{ background: "url(assets/img/bg/location_box_bg.jpg)" }}
            >
              <div
                className="vs-carousel"
                data-asnavfor="#mapSlide"
                id="locationSlide"
                data-fade="true"
                data-slide-show="1"
                data-md-slide-show="1"
              >
                <div className="location-card">
                  <h3 className="location-title">ঠিকানা</h3>
                  <div className="location-info">
                    <span className="info-title">মিলনস্থল</span>
                    <p className="info-text">
                      ধরমপুর মাধ্যমিক বিদ্যালয় খেলার মাঠ।
                    </p>
                  </div>
                  <div className="location-info">
                    <span className="info-title">ঠিকানা</span>
                    <p className="info-text">
                      গ্রামঃ ধরমপুর, পোস্টঃ সাতবাড়ি
                      <br />
                      থানাঃ ভেড়ামারা, জেলাঃ কুষ্টিয়া
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/FJVPgi9Ms7NwEhhM7"
                    className="vs-btn btn-white"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="map-slide-wrap">
              <div
                className="vs-carousel"
                data-asnavfor="#locationSlide"
                id="mapSlide"
                data-fade="true"
                data-slide-show="1"
                data-md-slide-show="1"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.507823978085!2d88.95299433855492!3d24.03583374325944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea517ad7ace75%3A0xd0988d7cba96fce9!2sDharampur%20Football%20Field!5e1!3m2!1sen!2sbd!4v1747666384509!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
