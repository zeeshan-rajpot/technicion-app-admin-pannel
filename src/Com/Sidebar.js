import React, { useState } from "react";
import homeicon from "../images/Iconly-Bold-Home (1).svg";
import accounticon from "../images/Iconly-Bold-Profile.svg";
import notify from "../images/Iconly-Bold-Notification.svg";
import logout from "../images/Logout.svg";
import block from "../images/Component 610 – 1.svg";
import "./Sidebar.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./verticalModal";

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab); // Initialize with default active tab
  const [modalShow, setModalShow] = useState(false);

  return (
    <>


    <div className="mobilenone">
      <div
        className="d-flex align-items-start justify-content-between flex-column pt-3  "
        style={{ height: "90vh" }}
      >
        <div>
          <div
            className={`d-flex align-items-start justify-content-start mt-2 ${
              activeTab === "home" ? "active-tabbbb" : ""
            }`}
            onClick={() => setActiveTab("home")}
          >
            <img
              src={homeicon}
              alt="Home Icon"
              className={`svg ${activeTab === "home" ? "active-icons" : ""}`}
            />
            <Link to="/home">
              {" "}
              <p
                className={`ps-2 text-secondary  ${
                  activeTab === "home" ? "active-tabbbb" : ""
                }`}
              >
                <b>Home</b>
              </p>
            </Link>{" "}
          </div>
          <div
            className={`d-flex align-items-start justify-content-start mt-2 ${
              activeTab === "account" ? "active-tabbbb" : ""
            }`}
            onClick={() => setActiveTab("account")}
          >
            <img
              src={accounticon}
              alt="Account Icon"
              className={` ${activeTab === "account" ? "active-icons" : ""}`}
            />
            <Link to="/Account">
              {" "}
              <p
                className={`ps-2 text-secondary ${
                  activeTab === "account" ? "active-tabbbb" : ""
                }`}
              >
                <b>Account</b>
              </p>
            </Link>{" "}
          </div>
          <div
            className={`d-flex align-items-start justify-content-start mt-2 ${
              activeTab === "notification" ? "active-tabbbb" : ""
            }`}
            onClick={() => setActiveTab("notification")}
          >
            <img
              src={notify}
              alt="Notification Icon"
              className={` ${
                activeTab === "notification" ? "active-icons" : ""
              }`}
            />

            <Link to="/notification">
              {" "}
              <p
                className={`ps-2 text-secondary ${
                  activeTab === "notification" ? "active-tabbbb" : ""
                }`}
              >
                <b>Notification</b>
              </p>
            </Link>
          </div>

          <div
            className={`d-flex align-items-start justify-content-start mt-2 ${
              activeTab === "Block" ? "active-tabbbb" : ""
            }`}
            onClick={() => setActiveTab("Block")}
          >
            <img
              src={block}
              alt="Block Icon"
              className={` ${activeTab === "Block" ? "active-icons" : ""}`}
            />

            <Link to="/Block">
              {" "}
              <p
                className={`ps-2 text-secondary ${
                  activeTab === "Block" ? "active-tabbbb" : ""
                }`}
              >
                <b>Block</b>
              </p>
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-start justify-content-start">
          <img src={logout} alt="Logout Icon" className={` `} />

          <p
            className={`ps-2 text-secondary`}
            style={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => setModalShow(true)}
          >
            <b>Logout</b>
          </p>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      </div>



      <div className="destopnone pt-2">
      <div className="d-flex align-item-center justify-content-between">
      <Link to="/home">

        <div
          className="d-flex  justify-content-center"
          style={{ alignItems: "flex-start" }}
        >
          <img
            src={homeicon}
            alt="Home Icon"
            className={`svg ${activeTab === "home" ? "active-icons" : ""}`}
          />{" "}
            <p
              className={` text-secondary mobilesidebartext ${
                activeTab === "home" ? "active-tabbbb" : ""
              }`}
            >
              <b>Home</b>
            </p>
        </div>
        </Link>{" "}
        <Link to="/Account">

        <div
          className="d-flex  justify-content-center"
          style={{ alignItems: "flex-start" }}
        >
          <img
            src={accounticon}
            alt="Account Icon"
            className={`svg ${activeTab === "Account" ? "active-icons" : ""}`}
          />{" "}
            <p
              className={` text-secondary mobilesidebartext ${
                activeTab === "Account" ? "active-tabbbb" : ""
              }`}
            >
              <b>Account</b>
            </p>
        </div>
        </Link>{" "}


        <Link to="/notification">

        <div
          className="d-flex  justify-content-center"
          style={{ alignItems: "flex-start" }}
        >
          <img
            src={notify}
            alt="notification Icon"
            className={`svg ${
              activeTab === "notification" ? "active-icons" : ""
            }`}
          />{" "}
         
            <p
              className={` text-secondary mobilesidebartext  ${
                activeTab === "notification" ? "active-tabbbb" : ""
              }`}
            >
              <b>notification</b>
            </p>
        </div>
        </Link>{" "}






        <Link to="/Block">

        <div
          className="d-flex  justify-content-center"
          style={{ alignItems: "flex-start" }}
        >
                  <img
            src={block}
            alt="Block Icon"
            className={`svg ${
              activeTab === "Block" ? "active-icons" : ""
            }`}
          />{" "}
    
            <p
              className={` text-secondary mobilesidebartext ${
                activeTab === "Block" ? "active-tabbbb" : ""
              }`}
            >
              <b>Block</b>
            </p>
        </div>
        </Link>{" "}

      </div>
      <div className="d-flex align-items-start justify-content-center text-center">
          <img src={logout} alt="Logout Icon" className={` `} />

          <p
            className={`text-secondary mobilesidebartext`}
            style={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => setModalShow(true)}
          >
            <b>Logout</b>
          </p>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>


    </>
  );
};

export default Sidebar;
