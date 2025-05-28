import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Registered = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const sheetName = "Form+Responses+1";
  const mainUrl = `https://script.google.com/macros/s/AKfycbySceH0cOTog8uiJIjeA23FRng4eHeAwAlFzifmpTGE2hPImc7f-fIh7s3KL_DPj4At/exec`;
  const url = `${mainUrl}?path=${sheetName}&action=read`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        const data = res?.data;
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const sortedUsers = users.sort(
    (a, b) =>
      a["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"] -
      b["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]
  );

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  return (
    <div
      className="container"
      style={{ width: "100%", padding: "20px", color: "#000" }}
    >
      <table className="user">
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
            currentUsers.map((user, idx) => (
              <tr key={user["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}>
                <td>{indexOfFirstUser + idx + 1}</td>
                <td>{user?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}</td>
                <td>{user?.নাম}</td>
                <td>{user?.["পিতার নাম"]}</td>
                <td>{user?.["স্থায়ী ঠিকানা"]}</td>
                <td>{user?.["ব্লাড গ্রুপ"]}</td>
                <td>
                  <Link
                    className="vs-btn"
                    style={{
                      minWidth: "10px",
                      margin: "0 auto",
                      textAlign: "center",
                      padding: "10px",
                    }}
                    to={`/registered/${user?.["নিবন্ধন নাম্বার (ফর্মের সিরিয়াল)"]}`}
                  >
                    <i
                      className="fa-solid fa-eye"
                      style={{ marginRight: "0" }}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={goToFirstPage} disabled={currentPage === 1}>
            &laquo;
          </button>
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            &lsaquo;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              style={{
                fontWeight: currentPage === i + 1 ? "bold" : "normal",
                margin: "0 2px",
              }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            &rsaquo;
          </button>
          <button onClick={goToLastPage} disabled={currentPage === totalPages}>
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Registered;
