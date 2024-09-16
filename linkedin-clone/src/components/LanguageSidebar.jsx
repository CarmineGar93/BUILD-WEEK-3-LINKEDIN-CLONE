import { Card, Col, Row } from "react-bootstrap";
import { GoPencil } from "react-icons/go";

const LanguageSidebar = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card className="w-100 mt-3">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className="mb-2">Lingua del Profilo</Card.Title>
              <GoPencil className="ms-3 mb-1" />
            </div>
            <Card.Subtitle className="mb-2  text-secondary ">
              Italiano
            </Card.Subtitle>
            <hr></hr>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className="mb-2 ">Profilo Pubblico e URL</Card.Title>
              <GoPencil className="ms-3 mb-1" />
            </div>
            <Card.Subtitle className="mb-2 text-muted">
              <Card.Link
                href="#"
                className="text-secondary text-decoration-none"
              >
                Another Link
              </Card.Link>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LanguageSidebar;
