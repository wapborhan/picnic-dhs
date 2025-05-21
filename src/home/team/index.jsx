import { Link } from "react-router-dom";

const teamData = [
  {
    id: 1,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/473569612_2667874960068472_5237296759164537034_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH8JlltlsRmxwB-xyySBwq4WzhktQdMnRFbOGS1B0ydEdJ5inFZozSy8SJ0NfaNnVKnvZx_lXoFUYwBjbsoeAth&_nc_ohc=mqiESRItBhYQ7kNvwHC7MC4&_nc_oc=AdnFCAU4AMxtGhUJysEoGjWIdq5F_i7FUMz1mopqxIXXtrPXzzLmKaQw3MpLj7Rf0F8&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=6fjDJorIubrjLo0UqralAA&oh=00_AfLBtogSAqfLIot-ZaeHH97gGUXC2NK5DSUfL7EvwGzDRA&oe=6830DE69",
    name: "Md Shajib ",
    facebook: "https://www.facebook.com/shajib.uddin.75",
    call: "01747312621",
  },
  {
    id: 2,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/495168207_3589848317976822_2987892815548239679_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH5DdpcVto5l7LiTjO0jU5848thQJcQaqXjy2FAlxBqpVZsubV89z1iZZ4Ty8j9m5CdlUpkISuq2C8OmU4c8B8N&_nc_ohc=2N6fZBLVFM4Q7kNvwE3Zu9D&_nc_oc=AdmMhL1XTZF-FycubFRiDErnBOFXnNTxxKVkpOAaL7fd-QSiDgqZdZCrps3zrcDf4cE&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=1vLUo-Ig-SRwiPSzJXZaFw&oh=00_AfKsqam_EiDut4UzB7zjKZmSvYyzfkpuw4MazZBkW2nMEw&oe=683121EF",
    name: "Md Mithun ",
    facebook: "https://www.facebook.com/vorer.sisir.378",
    call: "01753546275",
  },
  {
    id: 3,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/461541885_4121655094768495_9059278725653415507_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH8vxpNR0tZNaPfSivqN_j1iXI2wNvJBzaJcjbA28kHNgnTqIgXXhKCdBfDEZADa0NA4NqylfugFoW7LR8xQMND&_nc_ohc=vsRA-s6kYAsQ7kNvwEaF-r1&_nc_oc=AdmS7f8TR9rtOLz2BFy84D4o7JLCiG1al9OVH8Yd_eLqxcjjCW400g7Z8G5sJvzdBaM&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=ZIR1Xbp_l3xawv0VPuVbDg&oh=00_AfKyhvOOszh9aOHERV9h8CQ0l971Hmz_Pz8AeKzSl9m5qg&oe=68312112",
    name: "Md Robin",
    facebook: "https://www.facebook.com/robin.rj.779",
    call: "01766369931",
  },
  {
    id: 4,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/468921794_2742161775971868_5627577949879301822_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEG3CBSZQvaY_cp-lqKAhyNSl-2HvQPZqBKX7Ye9A9moBmIPyNV73j2FHq_TNeu8mmwPzZjEfPpM7BqAt5bPr1I&_nc_ohc=M9fEMOjJQTcQ7kNvwEsp280&_nc_oc=AdlxkF47O_jO0ZAexYjZYel1z0qLQZKGuMK36Q70bZhZ2FtjmHL9-T6WnYRv55W7ZVE&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=ExK4eG3jqKTTIKLbiQsuSQ&oh=00_AfKiHTY7Bqunvom2kIyokK_Yih7tCa-OdiBc3zS_YopT1A&oe=683116BC",
    name: "Md Shihabul",
    facebook: "https://www.facebook.com/mshaque.buet",
    call: "01770417810",
  },
  {
    id: 5,
    image:
      "https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-1/472596951_3906316609638398_5036733929660321453_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeE7SGxeR18VpLuyCl35nCJ6RqLp2x-2NLJGounbH7Y0shCoGh9LJcQXg2EPd7okokKejFVyAmMtBLlJ5cem_YGL&_nc_ohc=K7Zn9hxFWSIQ7kNvwHaZAlP&_nc_oc=AdkZCnis5JwWaqUYIeD7FEcC07GNvflJ4y3K1H4QyoRRWwTh6Sugpe4YIQwxcmxlLzE&_nc_zt=24&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=-952VYSLLVrlcHG-UX4qPw&oh=00_AfIwruipl8y343kusoBeAh1R551uB73r_XbW48msK8SV3A&oe=68333D36",
    name: "Md Marfat",
    facebook: "https://www.facebook.com/Marfat.fm",
    call: "01736396765",
  },
  {
    id: 6,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/401078534_820831133385190_6156006316279730900_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=jcXK9Eol7gAQ7kNvwErH9KY&_nc_oc=Adm1-Am-JlRKeff0w6w9bOmMtYEXajkP_wjChB20sS8LutqqgYwN0WSsdS6C6ZF-APs&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=DxOzv1Kp1DOulgxAHwn-sg&oh=00_AfKFH_tcPyjwh1PJXr4J1WARFFXl_f0bd2SXsPzSLiQBxw&oe=68310DD3",
    name: "Borhan U.",
    facebook: "https://www.facebook.com/borhaninfos",
    call: "01620557840",
  },
  {
    id: 8,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/480785659_1089288439634573_926328519350886916_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE5MEF_DNb11H7V9vwkLRhNM9VhSvwtqUwz1WFK_C2pTA7n261x2AE2Zyv1RYYO0GtOQ8N8DmEKfuJjKsZEMxzY&_nc_ohc=T2BEhWOqu38Q7kNvwFAApVA&_nc_oc=AdkuDe0xTohlS1N_w4jceNuYdO_tJYtBvjYM0TyiCnhT5PoCeJ6DO9SyYtCJCak4GhI&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=ExFUQuTriAR9xeKaboXyHQ&oh=00_AfJ1X2Tmv9lfbiV9ifGj_8XMSbqfG1Bp-Y-GRHNOSgLncA&oe=6831FD8B",
    name: "MD Biddut",
    facebook: "https://www.facebook.com/biddut.malitha.9#",
    call: "01671106092",
  },

  {
    id: 7,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/455191101_122101964576468222_8509145463135562660_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGrNQqwOxdDPpiPV-cSuydRJTXFOdcGFbElNcU51wYVsRx7M1ZurHpfppyg2AxCQs4hpza4UXaO4A4V2BU_yhLC&_nc_ohc=gfdn0Rw7WtEQ7kNvwFGHuWI&_nc_oc=AdmCo3xfUvfhtmyZ9xcPgE5Uh4K6k5f-iSB1htipa4hQpSvyY8EdZ8Qkx4I6SsKSGIw&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=59PpF0qdMXFEe5ZkoJDbBw&oh=00_AfIZ6lrHVO4EeNglOKztPjz7mRVumO8hWPqUA414Mfl6BA&oe=6831E3CF",
    name: "MD Shakib",
    facebook: "https://www.facebook.com/mdistiakahemmed.shakib",
    call: "01762200109",
  },
  {
    id: 5,
    image:
      "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/457742268_1993194094448656_6206837871141685045_n.jpg?stp=c0.0.940.940a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEewSpeshKPFcT-FoiL4-et7AnSNv0Y4t_sCdI2_Rji32UM-UHmoysFnKmWpkqa57lOgO2JL3HHR4PMiNU2Rc4w&_nc_ohc=4sqUbjJietQQ7kNvwEIckVr&_nc_oc=Adl-Xfrz48BEZ6uLav9gfHWI4c39N45Ah4BBek4o9dZdBx_BCh39YWhnrhXHclRkmfI&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=JhzwnQrahZdm50IOjtm9iQ&oh=00_AfJrXJS7v98aJlP4uvUW0yyFdxJuAc5nsCcYdWbkAKwQhw&oe=683120C5",
    name: "Md Imran ",
    facebook: "https://www.facebook.com/imran.nazir.88228",
    call: "01790285589",
  },
];

const Team = () => {
  return (
    <section
      className="space"
      data-bg-src=""
      style={{
        background: `url(assets/img/bg/team_bg_2.jpg)`,
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-white">
            <span className="shape white"></span>
            ভলেন্টিয়ার
          </span>
        </div>
        <div
          className="row slider-shadow vs-carousel"
          data-slide-show="4"
          data-lg-slide-show="3"
          data-sm-slide-show="2"
          style={{ justifyContent: "center" }}
        >
          {teamData.map((team) => {
            return (
              <div className="col-lg-3 col-sm-4 mb-4" key={team?.id}>
                <div className="team-block" style={{ position: "relative" }}>
                  <div className="team-block_img">
                    <div
                      className="team-block_shape"
                      style={{
                        background: "url(assets/img/team/team_2_shape.png)",
                        backgroundSize: "100% 100% !important",
                      }}
                    >
                      <img src={team?.image} alt="team image" />
                      <div className="play-btn">
                        <i className="far fa-plus"></i>
                      </div>
                      <div className="vs-social">
                        <Link to={team?.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>{" "}
                        <Link to={`tel:+88${team?.call}`}>
                          <i className="fas fa-phone"></i>
                        </Link>
                        <Link to={`https://wa.me/88${team?.call}`}>
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="team-block_info position-absolute start-50 translate-middle">
                    <h3 className="team-block_title">
                      <a href="speaker-details.html">{team?.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
