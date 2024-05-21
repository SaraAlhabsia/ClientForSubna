// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Row, Container } from "reactstrap";
import { Provider } from "react-redux";
import { store } from "./store";
import Navigate from "./Component/Navigate";
import HomePage from "./Component/HomePage";
import BrandsPage from "./Component/BrandsPage";
import AboutUsPage from "./Component/AboutUsPage";
import ContactPage from "./Component/ContactPage";
import Login from "./Component/Login";
import Register from "./Component/Register";
import AlhabsiProductsPage from "./Component/AlhabsiProductsPage";
import AlrajulProductsPage from "./Component/AlrajulProductsPage";
import BroseProductsPage from "./Component/BroseProductsPage";
import AlhabsiOrderPage from "./Component/AlhabsiOrderPage";
import AlrajulOrderPage from "./Component/AlrajulOrderPage";
import BroseOrderPage from "./Component/BroseOrderPage";
import CartPage from "./Component/CartPage";
import PaymentPage from "./Component/PaymentPage";
import VisaPage from "./Component/VisaPage";
import ShippingPage from "./Component/ShippingPage";

function App() {
  return (
    <Provider store={store}>
      <>
        <Container fluid>
          <BrowserRouter>
            <Row></Row>
            <Row className="main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/brand" element={<BrandsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/Alhabsi" element={<AlhabsiProductsPage />} />
                <Route path="/AlhabsiOrder" element={<AlhabsiOrderPage />} />
                <Route path="/Alrajul" element={<AlrajulProductsPage />} />
                <Route path="/AlrajulOrder" element={<AlrajulOrderPage />} />
                <Route path="/Brose" element={<BroseProductsPage />} />
                <Route path="/BroseOrder" element={<BroseOrderPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/visa" element={<VisaPage />} />
                <Route path="/shipping" element={<ShippingPage />} />
              </Routes>
            </Row>
            <Row></Row>
          </BrowserRouter>
        </Container>
      </>
    </Provider>
  );
}

export default App;
