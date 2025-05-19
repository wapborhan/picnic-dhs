const CardShape = "assets/img/shape/card-shape.png";

const index = () => {
  return (
    <section
      className="bg-smoke space-top space-extra-bottom"
      style={{
        backgroundImage: `url("assets/img/bg/bg-8.png")`,
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">পিকনিক পরিকল্পনা</span>
          <h2 className="sec-title">কেন আপনার পিকনিকে যোগদান করা উচিত</h2>
          <span className="shape-title"></span>
        </div>
        <div
          className="row vs-carousel"
          data-slide-show="4"
          data-lg-slide-show="3"
          data-arrows="true"
        >
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">সাক্ষাৎ</h3>
                <p className="vs-card_text">
                  দীর্ঘদিন পর দেখা হলে হৃদয় ভরে যায় আনন্দে।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src="assets/img/icon/eplan-1.png" alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">স্মৃতিচারণ</h3>
                <p className="vs-card_text">
                  ক্লান্ত জীবনে এমন কিছু মুহূর্ত, যা ছবিতে আর মনে থেকে যাবে
                  সারাজীবন।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src="assets/img/icon/eplan-2.png" alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">প্রাণবন্ত দিন</h3>
                <p className="vs-card_text">
                  খেলার ময়দানে একটু দৌড়, একটু মজা — দিনটাকে করে তুলবে স্মরণীয়।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src="assets/img/icon/eplan-3.png" alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">লটারি </h3>
                <p className="vs-card_text">
                  লটারি ড্রয়ে ছোট্ট পুরস্কার, আর তাতেই হবে খুশির বড় আয়োজন!
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src="assets/img/icon/eplan-4.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
