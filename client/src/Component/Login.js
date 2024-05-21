import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

import { LoginValid } from "../Validations/LoginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, validate } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Navigate from "./Navigate";
import Footer from "./Footer";

function Login() {
  //two state variable because has two form fild have
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);
  const navigate = useNavigate();
  //object
  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValid) });

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/brand");
    }
    if (isError) {
      alert("Invalid User..");
      navigate("/");
    }
  }, [user, isSuccess, isError]); //automatic function

  const handleSubmit = (formData) => {
    const data = {
      //sending the data
      email: email, //from the state variable
      pass: pass,
    };
    dispatch(login(data));
  };

  return (
    <div>
      <Container className="form-container">
        <Row>
          <Col md={1}></Col>
          <Col md={{ size: 4 }}>
            <div>
              <br />
              <br />
              <br />
              <img src={logo} alt="logo" width={370} height={600} />
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
                          <Label for="Email" className="smalltext">
                            Email:
                          </Label>
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="username"
                            {...register("email", {
                              value: { email },
                              onChange: (e) => setEmail(e.target.value),
                            })}
                          />
                          <p className="error">{errors.email?.message}</p>
                        </FormGroup>

                        <FormGroup>
                          <Label for="Password" className="smalltext">
                            Password:
                          </Label>
                          <input
                            className="form-control"
                            id="Password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            {...register("password", {
                              value: { pass },
                              onChange: (e) => setPass(e.target.value),
                            })}
                          />
                          <p className="error">{errors.password?.message}</p>
                        </FormGroup>

                        <FormGroup check>
                          <Input type="checkbox" className="smalltext" />
                          <Label check className="smalltext">
                            Remember Me
                          </Label>
                        </FormGroup>

                        <FormGroup>
                          <Label className="smalltext">Forget Password</Label>
                        </FormGroup>

                        <FormGroup>
                          <Button
                            className="button"
                            color="primary"
                            onClick={submitForm(handleSubmit)}
                          >
                            Submit
                          </Button>
                        </FormGroup>

                        <FormGroup>
                          <Label className="smalltext">
                            No Account?
                            <Link to="/register">Sign Up </Link>now.
                          </Label>
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
}
export default Login;
