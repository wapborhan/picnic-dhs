import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const demoUser = {
  Timestamp: "2025-05-21T08:39:37.000Z",
  নাম: "Test",
  "পিতার নাম": "Test father",
  মোবাইল: "01354",
  "স্থায়ী ঠিকানা": "Dharampur, Bheramara, Kushtia",
  "বর্তমান ঠিকানা": "Bheramara, Kushtia",
  লিঙ্গ: "পুরুষ",
  "ব্লাড গ্রুপ": "A+",
  "বৈবাহিক অবস্তা": "বিবাহিত",
  "বিবাহিত হলে বাচ্চার সংখ্যা": 5,
  "এসএসসি সাল / রানিং শিক্ষার্থী 0 লিখবেন": 2025,
  "বর্তমান পেশা": "চাকুরীজীবী",
  "প্রতিষ্ঠান এর নাম": "dnjkbjk",
  "অস্থায়ী ঠিকানা": "2dm;",
  "রেজিস্ট্রেশন ফি": 254,
  "টাকা প্রদান এর মাধ্যম": "নগদ",
  "ফি আদায় কারির নাম অথবা মোবাইল নাম্বার": "s,mnlkn",
};
const RegUserDetails = () => {
  const { name } = useParams();
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
        const mainData = [demoUser, ...data];
        setUsers(mainData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterduser = users?.find((user) => user?.নাম === name);
  console.log(filterduser);

  return (
    <>
      {/* <div
        class="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcrumb-bg.jpg"
        style={{
          background: "url(/assets/img/bg/breadcrumb-bg.jpg)",
        }}
      >
        <div class="container">
          <div class="breadcumb-content">
            <h1 class="breadcumb-title">Speaker Details</h1>
            <ul class="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">Speaker Details</li>
            </ul>
          </div>
        </div>
      </div> */}
      <section class="space">
        <div class="container">
          <div class="row team-details">
            <div class="team-img">
              <img
                src="/assets/img/team/team-details.png"
                alt="Speaker member"
              />
            </div>
            <div class="col-lg-10 offset-lg-2">
              <div class="team-content-card bg-smoke">
                <h2 class="team-name">{filterduser?.নাম}</h2>
                <span class="team-desig">{filterduser?.["পিতার নাম"]}</span>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default RegUserDetails;
