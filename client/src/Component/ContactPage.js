import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Style.css';
import Navigate from './Navigate';
import Footer from './Footer';
import logo from '../img/logo.png';
import { GrPhone } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';

const ContactPage = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="main-container">
      <Container className="form-container">
        <Row className="align-items-center mb-4">
          <Col md={{ size: 5 }} className="text-center text-md-left">
            <img src={logo} alt="logo" width={90} height={100} />
          </Col>
          <Col>
            <Navigate />
          </Col>
        </Row>

        <Container className="product-container text-center">
          <h1>Contact US</h1>
          <div className="contact-info mt-4">
            <div className="mb-3">
              <GrPhone size={30} className="contact-icons" />
              <span className="contact-text">+968 91190011</span>
            </div>
            <div>
              <MdOutlineMail size={30} className="contact-icons" />
              <span className="contact-text">Subna@gmail.com</span>
            </div>
          </div>
          <Button className="contact-button mt-4" onClick={toggle}>
            Contact Us
          </Button>
        </Container>
      </Container>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Contact Us</ModalHeader>
        <ModalBody>
          <p>We would love to hear from you! Please reach out to us using the contact information provided.</p>
          <div className="contact-modal-info">
            <div className="d-flex align-items-center mt-3">
              <GrPhone size={25} className="mr-2" />
              <span>+968 91190011</span>
            </div>
            <div className="d-flex align-items-center mt-3">
              <MdOutlineMail size={25} className="mr-2" />
              <span>Subna@gmail.com</span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={toggle}>Close</Button>
        </ModalFooter>
          <br/>
          <br/>
          <br/>
          <br/>
      </Modal>

      <Footer />
    </div>
  );
};

export default ContactPage;
