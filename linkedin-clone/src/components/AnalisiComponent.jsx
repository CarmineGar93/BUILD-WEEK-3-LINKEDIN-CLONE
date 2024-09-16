import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function AnalisiComponent() {
  return (
    <Card className="mt-3">
      <div className="p-4">
      <Row>
        <Col>
          <h5 className="mb-0">Analisi</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-secondary">
            <i className="bi bi-eye-fill"></i>&nbsp; Solo per te
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Row className="g-0">
            <Col md={1}>
              <i className="bi bi-people-fill"></i>
            </Col>
            <Col md={11}>
              <h5 className="mb-0">120 visualizzazioni del profilo</h5>
              <p>Scopri chi ha visitato il tuo profilo.</p>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row className="g-0">
            <Col md={1}>
              <i className="bi bi-bar-chart-fill"></i>
            </Col>
            <Col md={11}>
              <h5 className="mb-0">207 impressioni del post</h5>
              <p>Scopri chi sta interagendo con i tuoi post.</p>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row className="g-0">
            <Col md={1}>
              <i className="bi bi-search"></i>
            </Col>
            <Col md={11}>
              <h5 className="mb-0">8 comparse nei motori di ricerca</h5>
              <p>Vedi quante volte compari nei risultati di ricerca.</p>
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
      <button type="button" className="rounded-top-0 btn btn-light border-top ">
          Mostra tutte le analisi <i className="bi bi-arrow-right"></i>
      </button>
    </Card>
  );
}

export default AnalisiComponent;
