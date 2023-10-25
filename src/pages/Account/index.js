import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../images/Profile.svg";
import message from "../../images/Message.svg";
import lock from "../../images/Iconly-Bold-Lock.svg";
import Sidebar from "../../Com/Sidebar";
import Navbar from "../../Com/Navbar";
import axios from "axios";
import { baseurl } from "../const";

const Account = () => {
  const [loginid, setLogInid] = useState(null);
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false); // Added editMode state

  useEffect(() => {
    const id = localStorage.getItem("loginid");
    if (id) {
      setLogInid(id);
    }
  }, []);

  useEffect(() => {
    if (loginid) {
      axios
        .get(`${baseurl}/AdminGetInfo/${loginid}`)
        .then((response) => {
          setUserData(response.data.Admin);
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }
  }, [loginid]);

  const handleSaveChanges = () => {
    // Send updated data to the server
    axios
      .post(`${baseurl}/updateAdmin/${loginid}`, userData)
      .then((response) => {
        console.log(userData)
        console.log('Account updated successfully!', response.data);
        setEditMode(false); // Disable edit mode after saving changes
      })
      .catch((error) => {
        console.error('Error updating account:', error);
      });
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Sidebar Component */}
          <Col sm={4} lg={2} className="border">
            <Sidebar activeTab="account" />
          </Col>

          {/* Account Information */}
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
                  <Col lg={12} className="mt-4 w-75 m-auto">
                    <Row >
                      <div className="d-flex justify-content-center align-item-center ">

                      <img src={profile} className="inputLogo" style={{width:'20px'}} />
                      <input
                        placeholder="DavidWilliam"
                        className="input border-bottom "
                        value={userData ? userData.name : ""}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            name: e.target.value,
                          })
                        }
                        readOnly={!editMode} // Disable input if not in edit mode
                      />
                      </div>
                 
                    </Row>
                    <Row className=" mt-3">
                    <div className="d-flex justify-content-center align-item-center ">
                    <img src={message} className="inputLogo" />
                      <input
                        placeholder="DavidWilliam@gmail.com"
                        className="input border-bottom"
                        value={userData ? userData.email : ""}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            email: e.target.value,
                          })
                        }
                        readOnly={!editMode} // Disable input if not in edit mode
                      />
                      </div>
                    </Row>
                    <Row className=" mt-3">
                    <div className="d-flex justify-content-center align-item-center ">
                    <img src={lock} className="inputLogo" />
                      <input
                        placeholder="Password"
                        className="input border-bottom"
                        type="password"
                        value={userData ? userData.password : ""}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            password: e.target.value,
                          })
                        }
                        readOnly={!editMode} // Disable input if not in edit mode
                      />
                      </div>
                    </Row>
                    <Row className="d-flex justify-content-center align-item-center mt-3">
                      <button
                        className="Signin-btn mt-3"
                        onClick={handleSaveChanges}
                        disabled={!editMode} // Disable button if not in edit mode
                      >
                        Save changes
                      </button>
                      <button
                        className="Signin-btn mt-3 ms-2 shadow"
                        style={{
                          color: "#ff7782",
                          background: "white",
                        }}
                        onClick={() => setEditMode(!editMode)} // Toggle edit mode
                      >
                        {editMode ? "Cancel" : "Edit"}
                      </button>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;


// import profile from "../../images/Profile.svg";
// import message from "../../images/Message.svg";
// import lock from "../../images/Iconly-Bold-Lock.svg";
// <img src={profile} className="inputLogo" />
//   <img src={message} className="inputLogo" />
//   <img src={lock} className="inputLogo" />