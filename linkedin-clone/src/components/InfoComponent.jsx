import { Card, Col, Row } from "react-bootstrap";
import { GoPencil } from "react-icons/go";
import { useSelector } from "react-redux";

const InfoComponent = () => {
  const user = useSelector((state) => state.user.user_logged);
  const profile = useSelector((state) => state.user.profile);

  return (
    <Row>
      <Col xs={12}>
        <Card className="w-100 mt-3">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className="mb-2">Informazioni</Card.Title>
              {
                user._id === profile._id && <GoPencil className="ms-3 mb-1 fs-3" />
              }

            </div>
            <Card.Text> {profile.bio}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InfoComponent;
