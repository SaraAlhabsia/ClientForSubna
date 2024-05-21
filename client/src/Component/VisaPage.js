import {
  Container,
  FormGroup,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";
import Navigate from "./Navigate";
import Footer from "./Footer";
import visa from "../img/visa.png";
import { useNavigate } from "react-router-dom";
 
const VisaPage = () => {
  const navigate = useNavigate();
 
 
  const handleSubmit = () => {
    navigate("/shipping");
  };
 
  return(
    <div>
      <Container className="form-container">
        <Row>
          <Col md={1}></Col>
          <Col md={{ size: 4 }}>
            <div>
              <br />
              <br />
              <br />
              <img src={visa} alt="visa" width={370} height={600} />
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <div>
              <Navigate />
              <br />
              <br />
              <br />
              <Container className="form2-cont">
                <Col style={{ textAlign: "center" }}>
                  <br />
                  <Row>
                    <h5>Login Page</h5>
                  </Row>
 
                  <Row>
                    <Col md="8">
                      <form className="form">
                       
                       
 
                        <FormGroup>
                          <Label for="CardNumber" className="smalltext">
                            Card Number:
                          </Label>
                          <input
                            className="form-control"
                            id="CardNumber"
                            name="password"
                            placeholder="Enter Card Number"
                            type="text"
                          />
                        </FormGroup>
 
 
                        <FormGroup>
                          <Label for="Password" className="smalltext">
                            CVV:
                          </Label>
                          <input
                            className="form-control"
                            id="CVV"
                            name="CVV"
                            placeholder="Enter CVV"
                            type="password"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="Name" className="smalltext">
                            Name:
                          </Label>
                          <input
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            type="text"
                          />
                        </FormGroup>
 
                        <FormGroup>
                          <Button
                            className="button"
                            color="primary"
                            onClick={handleSubmit}
                          >
                            shipping
                          </Button>
                        </FormGroup>
 
                      </form>
                    </Col>
                  </Row>
                  <Row></Row>
                </Col>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
  };
 
  export default VisaPage;