import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const demoUser = {
  Timestamp: "2025-05-21T08:39:37.000Z",
  নাম: "Test",
  "পিতার নাম": "Test father",
  মোবাইল: "01354",
  "স্থায়ী ঠিকানা": "njbjb",
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

const Registered = () => {
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
        console.log("Fetched data:", data?.data); // 👈 your actual sheet data here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <table className="user">
        <thead>
          <tr>
            <th>নাম</th>
            <th>পিতার নাম</th>
            <th>স্থায়ী ঠিকানা</th>
            <th>ব্লাড গ্রুপ</th>
            <th>অপশন</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => {
              console.log(user);

              return (
                <tr>
                  <td>{user?.নাম}</td>
                  <td>{user?.["পিতার নাম"]}</td>
                  <td>{user?.["স্থায়ী ঠিকানা"]}</td>
                  <td>{user?.["ব্লাড গ্রুপ"]}</td>
                  <td>
                    <Link className="vs-btn" to={`/registered/${user?.নাম}`}>
                      বিস্তারিত
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>{" "}
    </div>
  );
};

export default Registered;
