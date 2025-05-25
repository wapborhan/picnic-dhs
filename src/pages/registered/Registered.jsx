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
  function formatDateToDDMMYYYY(isoString) {
    let date = new Date(isoString);
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="container">
      <table className="user">
        <thead>
          <tr>
            <th>নিবন্ধন সময়</th>
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
                  <td>{formatDateToDDMMYYYY(user?.Timestamp)}</td>
                  <td>{user?.নাম}</td>
                  <td>{user?.["পিতার নাম"]}</td>
                  <td>{user?.["স্থায়ী ঠিকানা"]}</td>
                  <td>{user?.["ব্লাড গ্রুপ"]}</td>
                  <td>
                    <Link
                      className="vs-btn"
                      to={`/registered/${user?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}`}
                    >
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
