import { Card, Col, Row } from "react-bootstrap";
import { GoPencil } from "react-icons/go";
import { useSelector } from "react-redux";

const InfoComponent = () => {
  const user = useSelector((state) => state.user.user_logged);

  return (
    <Row>
      <Col xs={12}>
        <Card className="w-100 mt-3">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className="mb-2">Informazioni</Card.Title>
              <GoPencil className="ms-3 mb-1 fs-3" />
            </div>
            <Card.Text> {user.bio}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InfoComponent;
