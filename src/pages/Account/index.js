import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Com/Sidebar";
import './Account.css';
import

const Account = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={4} lg={2} className="border">
          <Sidebar activeTab="account" />
        </Col>

        <Col lg={10}>
        <div className='CenterScreen'>
        <Container className='shadow mt-4'>
          <Row className='p-5'>
            <Col className='d-flex' style={{ position: 'relative' }}>
              <div
                className='ProfileContainer'
                style={{ position: 'relative' }}
              >
                <img
                  src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                  className='Profile'
                  alt='random person'
                />
              </div>
              <div
                className='logo'
                style={{
                  position: 'absolute',
                  bottom: '-5%',
                  right: '65%',
                  transform: 'translate(10%, 20%)',
                }}
              >
                <img src={edit} alt='edit svg' className='Modalbtn' />
              </div>
          
            </Col>

            <Col>
              <Row className='d-flex justify-content-center align-item-center'>
                <img src={Namelogo} className='inputLogo' />
                <input placeholder='DavidWilliam' className='input' />
              </Row>
              <Row className='d-flex justify-content-center align-item-center mt-3'>
                <img src={Emaillogo} className='inputLogo' />

                <input placeholder='DavidWilliam@gmail.com' className='input' />
              </Row>
              <Row className='d-flex justify-content-center align-item-center mt-3'>
                <img src={Passwordlogo} className='inputLogo' />

                <input placeholder='***' className='input' />
              </Row>
              <Row className='d-flex justify-content-center align-item-center mt-3'>
                <img src={ConfirmPasswordlogo} className='inputLogo' />
                <input placeholder='***' className='input' />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
