import { Container, Row, Col } from "reactstrap";
import "./Style.css";
import Navigate from "./Navigate";
import Footer from "./Footer";
import logo from "../img/logo.png";

const AboutUsPage = () => {
  return (
    <div>
      <Container className="form-container">
        <Row>
          <Col md={{ size: 5 }}>
            <img src={logo} alt="logo" width={90} height={100} />
          </Col>
          <Col>
            <div>
              <Navigate />
            </div>
          </Col>
        </Row>
        <Container className="product-container">
        <h1>ABOUT US</h1>
        <h5>Subna is an Arabic term used by Omanis to express a person's elegance. 
          This website targets Omani youth. Moreover, non-Omanis who want to try on Omani clothes can also order from the website. 
          The main objective of the website is to cover all requirements of the traditional clothing and luxuries of the Omani man. 
          Subna is an Omani shopping website. It is used to save shopping time for men.</h5>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
