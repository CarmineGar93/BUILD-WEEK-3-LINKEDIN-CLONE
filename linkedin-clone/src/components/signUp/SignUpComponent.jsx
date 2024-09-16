import { Col, Container, Row } from "react-bootstrap";
import FormSignUp from "./FormSignUp";
import FooterSignUp from "./FooterSignUp";

const SignUpComponent = () => {
    
            // Non ripristinare lo sfondo
     
  return (

    <Container fluid className="backSign  vh-100 h-100">
      <header>
        <Row className='bg-light'>
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
     <div className='bg-light'>
      <main >
        <Row>
          <Col xs={12}>
            <FormSignUp/>
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
      </div> 
    </Container>
  );
};
export default SignUpComponent;
