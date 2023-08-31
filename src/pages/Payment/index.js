import React, { useState } from "react";
import PendingPayment from "./PendingPayment";
import PaymentHistory from "./PaymentHistory"; // Assuming you have a PaymentHistory component
import "./payment.css";
import pendingpay from "../../images/Component 607 – 1.svg";
import histryicon from '../../images/Component 608 – 1.svg'
const Payment = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="text-center mt-5">
      <div className="d-flex align-item-center justify-content-center border pb-3 pt-2 rounded-5"  >
        <div
          className={`d-flex align-item-center justify-content-start pt-2 pb-2 me-3 tab ${
            activeTab === "pending" ? "active-tabbtn" : ""
          }`}
          style={{ width: "40%", cursor: "pointer" }}
          onClick={() => setActiveTab("pending")}
        >
          <img src={pendingpay} />
          <div className="ms-1 pt-2">
            {" "}
            <p className="m-0 text-start" style={{ fontSize: "14px" }}>
             <b >Pending Payment</b>
            </p>
            <p className="m-0 text-start">Active 20+</p>
          </div>
        </div>
        <div
          className={`d-flex align-item-center justify-content-start  tab ${
            activeTab === "history" ? "active-histry" : ""
          }`}
          style={{ width: "40%", cursor: "pointer" }}
          onClick={() => setActiveTab("history")}
        >


          <img src={histryicon} width='50px'/>

        <div className="ms-1 pt-2">
            {" "}
            <p className="m-0 text-start pt-2" style={{ fontSize: "14px" }}>
             <b > Payment history</b>
            </p>
            <p className="m-0 text-start">Active 20+</p>
          </div>
        </div>
      </div>
      {activeTab === "pending" ? <PendingPayment /> : <PaymentHistory />}
    </div>
  );
};

export default Payment;
