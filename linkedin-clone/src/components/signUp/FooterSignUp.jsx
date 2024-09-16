import { Container, Row, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FooterSignUp = () => {
    const currentYear = new Date().getFullYear(); 
  return (
    <footer className="footer mt-0  d-none d-md-block">
      <Container>
        <Row className="mb-4">
          {/* Column 1 */}
          <Nav className="d-flex justify-content-center align-items-center flex-wrap">
            <img
              src="./Linkedin-Logo.png"
              alt="Logo"
              className="img-fluid "
              width="60"
            />
           <p className="text-secondary fs-6 ms-2">© {currentYear} </p>
            <Nav.Link className="ms-2 text-secondary fs-6" href="#">
              Accessibilità
            </Nav.Link>
            <Nav.Link className="ms-2 text-secondary fs-6" href="#">
              Informazioni
            </Nav.Link>
            <Nav.Link className="ms-2 text-secondary fs-6" href="#">
              Contratto di Licenza
            </Nav.Link>
            <Nav.Link className="ms-2 text-secondary fs-6" href="#">
              Informativa sulla Privacy
            </Nav.Link>
            <Nav.Link className="ms-2 text-secondary fs-6" href="#">
              Linee guida della comunity
            </Nav.Link>
            <Nav.Link className="ms-2 text-secondary fs-6" href="#">
              Informativa sui cookie
            </Nav.Link>
           


            {/* Dropdown Menu */}
            <Dropdown className="ms-2">
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="text-secondary text-decoration-none"
              >
                Lingua
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Inglese</Dropdown.Item>
                <Dropdown.Item href="#">Francese</Dropdown.Item>
                <Dropdown.Item href="#">Spagnolo</Dropdown.Item>
                <Dropdown.Item href="#">Portoghese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSignUp;
