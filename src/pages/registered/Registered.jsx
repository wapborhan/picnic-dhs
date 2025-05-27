import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        setUsers(data);
        console.log("Fetched data:", data?.data); // 👈 your actual sheet data here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  // function formatDateToDDMMYYYY(isoString) {
  //   let date = new Date(isoString);
  //   let day = String(date.getDate()).padStart(2, "0");
  //   let month = String(date.getMonth() + 1).padStart(2, "0");
  //   let year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // }

  const sortedUsers = users.sort(
  (a, b) => a["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"] - b["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]
);

  return (
    <div className="container"  style={{ width: "100%", padding: "20px",color: "#000" }}>
      <table className="user " >
        <thead>
          <tr>
            <th>ক্রঃ</th>
            <th>নিবন্ধন নাম্বার</th>
            <th>নাম</th>
            <th>পিতার নাম</th>
            <th>স্থায়ী ঠিকানা</th>
            <th>ব্লাড গ্রুপ</th>
            <th>অপশন</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            sortedUsers?.map((user,idx) => {
              console.log(user);

              return (
                <tr>
                  <td>{idx+1}</td>
                  <td>{user?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}</td>
                  <td>{user?.নাম}</td>
                  <td>{user?.["পিতার নাম"]}</td>
                  <td>{user?.["স্থায়ী ঠিকানা"]}</td>
                  <td>{user?.["ব্লাড গ্রুপ"]}</td>
                  <td>
                    <Link
                      className="vs-btn"
                      style={{ minWidth: "10px",margin: "0 auto",
                        textAlign: "center", padding: "10px"
                       }}
                      to={`/registered/${user?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}`}
                    >
                      <i class="fa-solid fa-eye" style={{marginRight: "0"}}></i>
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
