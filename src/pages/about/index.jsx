import { Link } from "react-router-dom";
import Team from "../../home/team";

const About = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">সম্পর্কে</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">মূল পাতা</Link>
              </li>
              <li className="active">সম্পর্কে</li>
            </ul>
          </div>
        </div>
      </div>
      <section
        className="bg-smoke space bg-auto-top-left"
        data-bg-src="assets/img/bg/contact_bg_1.png"
      >
        <div className="container">
          <div className="contact-area">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.507823978085!2d88.95299433855492!3d24.03583374325944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea517ad7ace75%3A0xd0988d7cba96fce9!2sDharampur%20Football%20Field!5e1!3m2!1sen!2sbd!4v1747666384509!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="space-top">
          <Team />
        </div>
      </section>
    </>
  );
};

export default About;
