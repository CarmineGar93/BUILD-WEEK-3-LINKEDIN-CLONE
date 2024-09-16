import { Button, Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

const SuggestComponent = () => {
  return (
    <Container className="bg-white border border-1 py-3 px-2 mt-2 rounded">
      <Row>
        <Col>
          <Row>
            <Col>Potrebbe interessarti</Col>
          </Row>
          <Row>
            <Col className="text-secondary">Pagine per te</Col>
          </Row>
          <Row className="mt-2">
            <Col xs={3}>
              <Image src="https://placedog.net/60x60 " />
            </Col>
            <Col xs={9}>
              <Row>
                <Col className="fs-5 fw-semibold">Infojobs Italia</Col>
              </Row>
              <Row>
                <Col>Servizi risorse umane</Col>
              </Row>
              <Row>
                <Col className="text-secondary">202.755 follower</Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <Image src="https://placedog.net/30x30 " roundedCircle />
                </Col>
                <Col xs={10}>
                  <a href="#a">1 collegamento segue questa pagina</a>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Button
                    variant="light"
                    className="border border-1 border-dark text-dark rounded-pill fw-semibold"
                  >
                    + Segui
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SuggestComponent;
