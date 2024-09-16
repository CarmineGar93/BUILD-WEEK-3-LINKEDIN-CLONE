import {
  Container,
  Nav,
  NavDropdown,
  NavItem,
  Row,
  Col,
  NavLink,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavDropdowndin() {
  const user = useSelector((state) => state.user.user_logged);
  const navigate = useNavigate();
  return (
    <NavDropdown title="Tu" id="basic-nav-dropdown" drop="start">
      <Container className="px-2">
        <Row>
          <Col xs={3}>
            <img
              src={user.image}
              alt=""
              width={50}
              height={50}
              className=" rounded-5"
            />
          </Col>
          <Col xs={9}>
            <p className="fw-bold mb-0">
              {user.name} {user.surname}
            </p>
            <p>{user.title}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <button
              className="w-100 py-0 btn-profile rounded-4"
              onClick={() => navigate("/profile")}
            >
              Visualizza profilo
            </button>
          </Col>
        </Row>
      </Container>
      <NavDropdown.Divider />
      <Container>
        <h6>Account</h6>
        <Nav className=" flex-column align-items-start">
          <NavItem>
            <NavLink className="p-0">Impostazioni e privacy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="p-0">Guida</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="p-0">Lingua</NavLink>
          </NavItem>
        </Nav>
      </Container>
      <NavDropdown.Divider />
      <NavDropdown.Item
        href="#action/3.4"
        style={{ width: "250px", visibility: "hidden" }}
      ></NavDropdown.Item>
      <Container>
        <h6>Gestisci</h6>
        <Nav className=" flex-column align-items-start">
          <NavItem>
            <NavLink className="p-0">Post e attività</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="p-0">Account per la pubblicazione...</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="p-0">Lingua</NavLink>
          </NavItem>
        </Nav>
      </Container>
      <NavDropdown.Divider />
      <Container>
        <Nav className=" flex-column align-items-start">
          <Nav.Item>
            <Nav.Link as={Link} to="/sign" className="p-0">
              Esci
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </NavDropdown>
  );
}

export default NavDropdowndin;
