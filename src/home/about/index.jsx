const TitleShape = "../../assets/img/shape/title_shape.png";
const About = "../../assets/img/normal/about_4.jpg";
//
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const index = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-lg-0 mb-60">
            <div className="about-img4">
              <img src={About} alt="about image" />
              {/* <div className="speaker-count">
                <div className="counter-number">80+</div>
                <span className="text">ছাত্র/ছাত্রি</span>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <span className="sub-title2">
              পিকনিক সম্পর্কে জানুন{" "}
              <img className="title-shape" src={TitleShape} alt="title shape" />
            </span>
            {/* <h2 className="sec-title mb-30">About The Event</h2> */}
            <p className="mb-35 text-justify">
              পিকনিকটি স্কুলের মাঠেই অনুষ্ঠিত হবে। সকালের দিকে ছাত্র-ছাত্রিরা
              সবাই মাঠে জমায়েত হবে। মাঠের এক পাশে খেলার আয়োজন করা হবে, যেখানে
              দৌড়, বল ছোড়া, আর হাল্কা মজার খেলা হবে। অন্যদিকে থাকবে গান-বাজনার
              আয়োজন। কেউ গান গাইবে, কেউ আবৃত্তি করবে, আর সবাই মিলে সেই পরিবেশ
              উপভোগ করবে।
            </p>
            <p className="mb-35 text-justify">
              পিকনিকের জন্য নানা ধরনের খাবারও থাকবে। দুপুরের দিকে লটারি ড্রয়ের
              আয়োজন থাকবে। ড্রয়ের সময় সবার মধ্যে উত্তেজনা থাকবে, কে কোন পুরস্কার
              পাবে তা নিয়ে।
            </p>
            <p className="mb-35 text-justify">
              এই দিনটি হবে খুব আনন্দের। সবাই মিলে খেলা, গান-বাজনা, খাওয়া-দাওয়া
              আর আড্ডায় দিনটি কাটাবে। পিকনিক শেষে সবাই সুখস্মৃতি নিয়ে বাড়ি ফিরবে
              এবং এই দিনটি সবাই মনে রাখবে দীর্ঘদিন।
            </p>
            <div className="info-media-wrap">
              <div className="info-media">
                <div className="info-media_icon">
                  <FaCalendarAlt />
                </div>
                <div className="media-body">
                  <h3 className="info-media_title">কবে হবে</h3>
                  <p className="info-media_text">ঈদের তৃতীয় দিন।</p>
                </div>
              </div>
              <div className="info-media">
                <div className="info-media_icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="media-body">
                  <h3 className="info-media_title">কোথায় হবে</h3>
                  <p className="info-media_text">
                    ধরমপুর মাধ্যমিক বিদ্যালয় খেলার মাঠ।
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="btn-group justify-content-center">
              <a href="#" className="vs-btn me-4">
                বিস্তারিত
              </a>{" "}
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
