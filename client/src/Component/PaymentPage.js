import { useNavigate } from "react-router-dom";
import Navigate from "./Navigate";
import Footer from "./Footer";
import logo from "../img/logo.png";
import { Button, Container, Col, Row } from "reactstrap";
import cash from "../img/cash.png";
import visa from "../img/visa.png";

const PaymentPage = () => {
  
  const navigate = useNavigate();

  const handelVisa = () => {
    // Navigate to RegisterPage
    navigate("/visa");
  };

  const handelCash = () => {
    // Navigate to RegisterPage
    navigate("/shipping");
  };
  
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
        <table>
          <tbody>
            <br />
            <br />

            <td class="px-5 py-2">
              <div class="container" style={{ backgroundColor: "white" , width: '300px', height: '300px'}}>
                <img src={cash} class="card-img-top" alt="Alhabsi" onClick={handelCash}/>
              </div>
            </td>

            <td class="px-5 py-2">
              <div class="container" style={{ backgroundColor: "white" , width: '300px', height: '300px'}}>
                <img src={visa} class="card-img-top" alt="Alhabsi" onClick={handelVisa}/>
              </div>
            </td>
          </tbody>
        </table>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentPage;
