import Footer from "./Footer";
import logo from "../img/logo.png";
import delivery from "../img/delivery.png";
import { Container, FormGroup, Label, Button, Row, Col } from "reactstrap";
import Navigate from "./Navigate";

const ShippingPage = () => {
  return (
    <div>
      <Container className="form-container">
        <Row>
          <Col md={{ size: 5 }}>
            <img src={logo} alt="logo" width={90} height={100} />
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <div>
              <Navigate />
            </div>
          </Col>
          <Container className="form2-cont">
            <img src={delivery} alt="delivery" width={370} height={400} />
          </Container>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ShippingPage;
