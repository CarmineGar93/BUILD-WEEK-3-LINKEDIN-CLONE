
import { Card, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";


function CreatePostComponent({ open }) {
    const user = useSelector((state) => state.user.user_logged);
    return (
        <Card className="px-3 pt-3 pb-1">

            <Row className=" g-2">
                <Col xs={'auto'}>
                    <img src={user.image} alt="" className="rounded-circle" width={50} height={50} />
                </Col>
                <Col xs={9} className=" flex-grow-1">
                    <Button variant="outline-secondary" className="rounded-5 w-100 text-start custom-padding" onClick={open}>Crea un post</Button>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs={5} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2">
                    <i className="bi bi-card-image text-primary me-1 fs-5"></i>
                    <span>Contenuti mutlimediali</span>
                </Col>
                <Col xs={3} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2">
                    <i className="bi bi-calendar-week me-1 fs-5 custom-calendar"></i>
                    <span>Evento</span>
                </Col>
                <Col xs={4} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2">
                    <i className="bi bi-blockquote-left text-danger me-1 fs-4"></i>
                    <span>Scrivi un articolo</span>
                </Col>

            </Row>
        </Card>
    )
}

export default CreatePostComponent