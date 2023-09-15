import React, { useState } from "react";
import axios from "axios";
// import "./login.css";
import { Col, Container, Row } from "react-bootstrap";
import loginimg from "../../images/Group 11810.svg";
import profile from "../../images/Profile.svg";
import lock from "../../images/Iconly-Bold-Lock.svg";
import email from "../../images/Message.svg";
import { Link } from "react-router-dom";
import { baseurl } from "../const";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    const signUpData = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post(`${baseurl}/adminSignUp`, signUpData)

      .then((response) => {
        // Handle successful sign-up (e.g., show a success message)
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        alert("Error signing up. Please try again.");
      });
  };
  return (
    <>
      <div className="bg-login">
        <Container id="login-container">
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center flex-column text-left login-container "
            >
              <div className="text-left" style={{ width: "70%" }}>
                <h1>Welcome to Your</h1>
                <h1>
                  {" "}
                  <span style={{ color: "#ff7783" }}>Technicion</span> Dashboard
                </h1>
              </div>
              <img className="pt-5 loginimg-laptop" src={loginimg} />
            </Col>
            <Col
              lg={6}
              className="  d-flex justify-content-center align-items-center flex-column"
            >
              <div
                className="bg-light text-center shadow pt-4 pb-4 rounded-5"
                style={{ width: "90%" }}
              >
                <h1 className="" style={{ color: "#ff7783" }}>
                  Sign Up
                </h1>

                <div className="input-container shadow">
                  {/* <FaUser className='icon' /> */}
                  <img src={profile} />
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-container shadow mt-4">
                  {/* <FaUser className='icon' /> */}
                  <img src={email} />
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-container shadow mt-4">
                  {/* <FaUser className='icon' /> */}
                  <img src={lock} />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-container shadow mt-4">
                  {/* <FaUser className='icon' /> */}
                  <img src={lock} />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button className="Signin-btn mt-4" onClick={handleSignUp}>
                  Sign Up
                </button>
                <p className="text-secondary mt-3">
                  Already have an account?
                  <Link to="/" className="text-secondary">
                    {" "}
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
