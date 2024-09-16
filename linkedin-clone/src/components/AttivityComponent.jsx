import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { GoPencil } from 'react-icons/go';
import ModalePost from './ModalePost'; 

const ActivityCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Card className=" cardAttivity mt-3">
      <div className="px-4 pt-4 flex-grow-1">
        <Row>
          <Col className="text-right">
            <h4 className="mb-0">Attività</h4>
            <p className="text-primary fw-bold mb-0 fs-6">10 Follower</p>
          </Col>
          <Col className="text-end">
            <Button 
              variant="outline-primary" 
              className="btn-md mb-2 me-3 rounded-pill" 
              onClick={handleShowModal}
            >
              Crea un post
            </Button>
            <GoPencil className="me-2 fs-3" />
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col md={11}>
            <h5 className="mb-0 fs-6">Non hai ancora pubblicato niente</h5>
            <p>I post che condividi appariranno qui.</p>
          </Col>
        </Row>
        </div>
        <button type="button" className="rounded-top-0 btn btn-light border-top ">
          Mostra tutte le attività <i className="bi bi-arrow-right"></i>
        </button>
        </Card>

      <ModalePost show={showModal} 
      handleClose={handleCloseModal}   
      image="./beard-1845166_1280 (1).jpg"
      name="Ferdinand"
      subtitle="Web developer" />
    </>
  );
};

export default ActivityCard;