import React, { useState } from "react";
import html2canvas from "html2canvas";
// import "../assets/index.css";

const TicketModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      document.getElementById("ticketModal").classList.add("show");
    }, 10);
  };

  const closeModal = () => {
    document.getElementById("ticketModal").classList.remove("show");
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "ticketModal") {
      closeModal();
    }
  };

  const downloadTicket = () => {
    const ticketElement = document.querySelector(".ticket");

    html2canvas(ticketElement, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = "ticket.png";
      downloadLink.click();
    });
  };

  return (
    <>
      <div className="view-ticket-btn">
        <button onClick={openModal} className="btn">
          View Ticket
        </button>
      </div>

      {isOpen && (
        <div id="ticketModal" className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="ticket-popup" id="ticket_download">
              <div class="box">
                <ul class="left">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <ul class="right">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div class="ticket">
                  <span class="airline">পুনর্মিলন ও সাংস্কৃতিক অনুষ্ঠান-2025</span>
                  <span class="airline airlineslip">পুনর্মিলন-2025</span>
                  {/* <span class="boarding">Boarding pass</span> */}
                  <div class="content">
                    <span class="jfk">JFK</span>
                    <span class="sfo">SFO</span>

                    <span class="jfk jfkslip">JFK</span>
                    <span class="plane planeslip">
                    </span>
                    <span class="sfo sfoslip">SFO</span>
                    <div class="sub-content">
                      <span class="watermark">Lufthansa</span>
                      <span class="name">
                        PASSENGER NAME
                        <br />
                        <span>Rex, Anonasaurus</span>
                      </span>
                      <span class="flight">
                        FLIGHT N&deg;
                        <br />
                        <span>X3-65C3</span>
                      </span>
                      <span class="gate">
                        GATE
                        <br />
                        <span>11B</span>
                      </span>
                      <span class="seat">
                        SEAT
                        <br />
                        <span>45A</span>
                      </span>
                      <span class="boardingtime">
                        BOARDING TIME
                        <br />
                        <span>8:25PM ON AUGUST 2013</span>
                      </span>

                      <span class="flight flightslip">
                        FLIGHT N&deg;
                        <br />
                        <span>X3-65C3</span>
                      </span>
                      <span class="seat seatslip">
                        SEAT
                        <br />
                        <span>45A</span>
                      </span>
                      <span class="name nameslip">
                        PASSENGER NAME
                        <br />
                        <span>Rex, Anonasaurus</span>
                      </span>
                    </div>
                  </div>
                  <div class="barcode"></div>
                  <div class="barcode slip"></div>
                </div>
              </div>
            </div>

            <div className="view-ticket-btn">
              <button onClick={downloadTicket} className="btn download_Btn">
                Download Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketModal;
