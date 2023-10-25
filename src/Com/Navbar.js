import React, { useState, useEffect } from "react";
import proflepic from "../../src/images/Screenshot from 2023-08-28 16-17-14.png";
import calender from "../../src/images/Group 11787.svg";
import axios from "axios";
import './navbar.css'
import { baseurl } from "../pages/const";
const Navbar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loginid, setLogInid] = useState(null);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const id = localStorage.getItem("loginid");
    console.log(id)
  
      
      // console.log(idAsInt)
      setLogInid(id);
 
  }, []);
  useEffect(() => {
    if (loginid) {
      axios
        .get(`${baseurl}/AdminGetInfo/${loginid}`)
        .then((response) => {
          // Set the user data in the state
          setUserData(response.data.Admin);
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }
  }, [loginid]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between border"
        style={{ height: "70px" }}
      >
        <div className="ps-md-4">
          <b className="mobilefont">Owner Dashboard</b>
        </div>
        <div className="d-flex align-item-center ">
          <img src={calender} className="m-0" />{" "}
          <p className="ms-2 m-0">{formattedDate}</p>
        </div>
        <div className="d-flex align-items-center">
          {/* <img src={proflepic} width="40px" className="me-2 rounded-circle mobileimg" /> */}
          <p className="m-0 pe-md-4 mobilefont" style={{ color: "#ff7783" }}>
            {" "}
            {userData ? (
          <p className="m-0 pe-md-4 mobilefont" style={{ color: "#ff7783" }}>
            {userData.name}
          </p>
        ) : null}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
