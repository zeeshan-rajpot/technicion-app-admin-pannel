import React from "react";
import "./login.css";
import { Col, Container, Row } from "react-bootstrap";
import loginimg from "../../images/Group 11810.svg";
import profile from "../../images/Profile.svg";
import lock from "../../images/Iconly-Bold-Lock.svg";
import { Link } from "react-router-dom";

const Login = () => {
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
                <h1 className="text-light">Welcome to Your</h1>
                <h2 className="text-light">
                  {" "}
                  <span  style={{ color: "#ff7783" }}>
                    <u
                      style={{
                        textDecorationColor: "white",
                        marginTop: "5px",
                        // fontSize: "16px",
                        // borderBottom: "2px solid white",
                      }}
                    >
                      Technician
                    </u>
                  </span>{" "}
                  Dashboard
                </h2>
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
                  Sign In
                </h1>

                <div className="input-container shadow">
                  {/* <FaUser className='icon' /> */}
                  <img src={profile} />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input-container shadow mt-4">
                  {/* <FaUser className='icon' /> */}
                  <img src={lock} />
                  <input type="password" placeholder="Password" />
                </div>
                <div
                  className="text-end mt-2"
                  style={{ width: "80%", marginLeft: "10%" }}
                >
                  <p className="text-secondary">Forget Password</p>
                </div>
                <button className="Signin-btn">
                  {" "}
                  <Link to="/Home" style={{ color: "white" }}>
                    {" "}
                    Sign In{" "}
                  </Link>
                </button>
                <p className="text-secondary mt-3">
                  Don't have an account?{" "}
                  <Link to="/SignUp" className="text-secondary">
                    {" "}
                    Sign up{" "}
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

export default Login;
