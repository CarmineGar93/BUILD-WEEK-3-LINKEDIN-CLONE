import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function RisorseComponent() {
  return (
    <Card className=" mt-3">
      <div className="p-4">
      <Row>
        <Col>
          <h5 className="mb-0">Risorse</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-secondary">
            <i className="bi bi-eye-fill"></i>&nbsp; Solo per te
          </p>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={"auto"}>
          <i className="bi bi-people-fill"></i>
        </Col>
        <Col md={11} className="">
          <h5 className="mb-0">La mia rete</h5>
          <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
        </Col>
      </Row>
      </div>
      <button type="button" className="fw-5 rounded-top-0 btn btn-light border-top ">
           Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
        </button>
    </Card>
  );
}

export default RisorseComponent;
