import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RegUserDetails = () => {
  const { slno } = useParams();
  const [users, setUsers] = useState([]);

  const sheetName = "Form+Responses+1";
  const mainUrl = `https://script.google.com/macros/s/AKfycbySceH0cOTog8uiJIjeA23FRng4eHeAwAlFzifmpTGE2hPImc7f-fIh7s3KL_DPj4At/exec`;
  const url = `${mainUrl}?path=${sheetName}&action=read`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // 👈 convert response to JSON
      })
      .then((res) => {
        const data = res?.data;
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const filterduser = users?.find((user) => {
    return user?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"].toString() === slno;
  });


  

  return (
    <>
      <div
        class="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcrumb-bg.jpg"
        style={{
          background: "url(/assets/img/bg/breadcrumb-bg.jpg)",
        }}
      >
        <div class="container">
          <div class="breadcumb-content">
            <h1 class="breadcumb-title">নিবন্ধিত ব্যবহারকারী</h1>
            <ul class="breadcumb-menu">
              <li>
                <a href="index.html">মূল পাতা</a>
              </li>
              <li class="active">নিবন্ধিত ব্যবহারকারী</li>
            </ul>
          </div>
        </div>
      </div>
      <section class="space">
        <div class="container">
          <div class="row team-details">
            <div class="col-lg-12 ">
              {filterduser ? (
                <div class="team-content-card bg-smoke">
                  <div class="team-img">
                    <img
                      src={filterduser?.["ছবির লিঙ্ক"]? filterduser?.["ছবির লিঙ্ক"] : filterduser?.["লিঙ্গ"] === "পুরুষ" ? "/assets/img/avater/male.png": "/assets/img/avater/female.png"}
                      alt="Speaker member"
                      class="img-fluid"
                      style={{ width: "250px", height: "auto" }}
                      loading="lazy"
                      decoding="async"
                    />
                    <h3 style={{ fontSize: "1.5em" ,}}>
                      নিবন্ধন নাম্বারঃ{" "}
                      {filterduser?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}
                    </h3>

                    <h2 class="team-name">{filterduser?.নাম}</h2>
                    <h2
                      class="team-desig"
                      style={{ fontSize: "1.8em" }}
                      title="পিতার নাম"
                    >
                      {filterduser?.["পিতার নাম"]}
                    </h2>
                  </div>
                  <div className="cont">
                    {" "}
                    <p class="team-desc">{filterduser?.["স্থায়ী ঠিকানা"]}</p>
                    <p class="team-desc">{filterduser?.["বর্তমান ঠিকানা"]}</p>
                    <div class="info-list">
                      <ul>
                        <li>
                          <strong>লিঙ্গ:</strong>
                          {filterduser?.["লিঙ্গ"]}
                        </li>
                        <li>
                          <strong>ব্লাড গ্রুপ:</strong>
                          {filterduser?.["ব্লাড গ্রুপ"]}
                        </li>
                        <li>
                          <strong>বৈবাহিক অবস্তা:</strong>
                          {filterduser?.["বৈবাহিক অবস্তা"]}
                        </li>{" "}
                        <li>
                          <strong>বাচ্চার সংখ্যা:</strong>
                          {filterduser?.["বিবাহিত হলে বাচ্চার সংখ্যা"]}
                        </li>
                        <li>
                          <strong>এসএসসি সাল / ক্লাস:</strong>
                          {filterduser?.["এসএসসি সাল / ক্লাস"]}
                        </li>
                        <li>
                          <strong>পেশা:</strong>
                          {filterduser?.["বর্তমান পেশা"]}
                        </li>{" "}
                        <li>
                          <strong>প্রতিষ্ঠান এর নাম:</strong>
                          {filterduser?.["প্রতিষ্ঠান এর নাম"]}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div>Loading ...</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegUserDetails;
