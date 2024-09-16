import { Col, Container, Row } from "react-bootstrap";
import FormSignUp from "./FormSignUp";
import FormRegister from "../login/FormRegister";
import FooterSignUp from "./FooterSignUp";

const RegisterComponent = () => {
  return (
    <Container fluid className="backReg vh-100">
      <header>
        <Row>
          <Col>
            <img
              src="./Linkedin-Logo.png"
              alt="LinkedIn Logo"
              height="60"
              className="px-4 ms-4 mt-3"
            />
          </Col>
        </Row>
      </header>
      <main>
        <Row>
          <Col xs={12}>
            <FormRegister/>
          </Col>
        </Row>
      </main>
      <footer>
        <Row>
          <Col>
        <FooterSignUp/>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};
export default RegisterComponent ;
