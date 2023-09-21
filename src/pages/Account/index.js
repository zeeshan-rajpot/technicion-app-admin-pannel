import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Com/Sidebar";
import "./Account.css";
import profile from "../../images/Profile.svg";
import message from "../../images/Message.svg";
import lock from "../../images/Iconly-Bold-Lock.svg";
import written from "../../images/Component 605 – 1.svg";
import Navbar from "../../Com/Navbar";
import axios from "axios";

const Account = () => {
  // Define state to hold the user id
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
        .get(`http://localhost:8000/AdminGetInfo/${loginid}`)
        .then((response) => {
          // Set the user data in the state
          setUserData(response.data.Admin);
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }
  }, [loginid]);

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col sm={4} lg={2} className="border">
            <Sidebar activeTab="account" />
          </Col>

          <Col lg={10}>
            <div className="CenterScreen">
              <Container
                className="shadow  rounded-5"
                style={{
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  marginTop: "50px",
                }}
              >
                <Row className="p-5">
                  <Col
                    lg={4}
                    className="d-flex align-item-center justify-content-center"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="ProfileContainer"
                      style={{ position: "relative" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        className="Profile"
                        alt="random person"
                      />
                    </div>
                    <div
                      className="logo editbtnaccount"
                      style={{
                        position: "absolute",
                        bottom: "-5%",
                        right: "28%",
                        transform: "translate(10%, 20%)",
                      }}
                    >
                      <img src={written} alt="edit svg" className="Modalbtn" />
                    </div>
                  </Col>

                  <Col lg={8} className="mt-4">
                    <Row className="d-flex justify-content-center align-item-center">
                      <img src={profile} className="inputLogo" />
                      <input placeholder="DavidWilliam" className="input" 
                        value={userData ? userData.name : ""}
                      />
                    </Row>
                    <Row className="d-flex justify-content-center align-item-center mt-3">
                      <img src={message} className="inputLogo" />

                      <input
                        placeholder="DavidWilliam@gmail.com"
                        className="input"
                        value={userData ? userData.email : ""}
                      />
                    </Row>
                    <Row className="d-flex justify-content-center align-item-center mt-3">
                      <img src={lock} className="inputLogo" />

                      <input
                        placeholder="Password"
                        className="input"
                        type="Password"
                      />
                    </Row>
                    <Row className="d-flex justify-content-center align-item-center mt-3">
                      <img src={lock} className="inputLogo" />
                      <input
                        placeholder="Confirm Password"
                        className="input"
                        type="Password"
                      />
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <Row className="text-center">
              <Col>
                <button className="Signin-btn mt-3"> Save changes </button>
                <button
                  className="Signin-btn mt-3  ms-2 shadow"
                  style={{ color: "#ff7782", background: "white" }}
                >
                  {" "}
                  Back to Home
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
