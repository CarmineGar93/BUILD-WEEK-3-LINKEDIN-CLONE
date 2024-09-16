import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Badge, Image } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SecondCard = () => {
  const [smShow, setSmShow] = useState(false);

  return (
    <Row>
      <Col>
        <Card className="w-100 mt-3 position-relative">
          <Image
            src="https://placedog.net/90x90 "
            className="z-1 position-absolute top-0 start-0 rounded-3 mt-2 ms-3"
          />
          <Badge
            bg="light"
            text="secondary"
            className="z-1 position-absolute top-0 end-0  mt-3 me-3"
          >
            Promosso{" "}
            <span onClick={() => setSmShow(true)} className="pe-auto">
              ***
            </span>
          </Badge>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Opzioni annuncio
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Perchè vedo questo annnuncio?</h5>
              <p>Gestisci le preferenze per gli annunci pubblicitari</p>
              <h5>Nascondi o segnala annuncio</h5>
              <p>Non voglio vedere questo annuncio nel mio feed</p>
            </Modal.Body>
          </Modal>
          <Card.Img variant="top" src="https://placedog.net/150x40" />
          <Card.Body>
            <Card.Title className="pt-2">B&B HOTELS</Card.Title>
            <Card.Text>Scopri le opportunità offerte da B&B HOTELS Italia</Card.Text>
            <Card.Text className="fs-6 lh-1 text-muted">Scopri le ultime offerte di lavoro e notizie</Card.Text>            
            <Button
              variant="light"
              className="border border-1 border-primary text-primary rounded-pill w-100 fw-semibold"
            >
              Segui
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SecondCard;
