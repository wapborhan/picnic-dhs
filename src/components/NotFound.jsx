import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center text-center mt-5 mb-5">
        <div className="d-block text-center mt-5 mb-5">
          <div
            className="ttle"
            style={{
              fontSize: "90px",
              fontWeight: "900",
            }}
          >
            404
          </div>
          <div
            className="desc"
            style={{
              fontSize: "50px",
              fontWeight: "700",
            }}
          >
            NotFound
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
