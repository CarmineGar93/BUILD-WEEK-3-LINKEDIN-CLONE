// src/components/OtherProfile.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ProfileCard from './ProfileCard';

const OtherProfile = () => {
  return (
    <Row className="mb-5">
      <Col xs={12}>
        <Card className="w-100 mt-3">
          <div>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title className="mb-3 text-black">
                Altri profili per te
              </Card.Title>
            </div>

            <ProfileCard
              image="./petauro.jpg"
              userId={'66e4314a80067d001512445b'}
            />
            <ProfileCard
              image="./suricato.jpg"
              userId={'66e30d45543a4c0015901e7d'}
            />
            <ProfileCard
              image="./koala.jpeg"
              userId={'66dea75e4d0def0015cef0f5'}
            />
            <ProfileCard
              image="./scoiattolo.jpg"
              userId={'66deae8e4d0def0015cef0fc'}
            />
            <ProfileCard
              image="quokka.webp"
              userId={'66e432cf80067d001512446c'}
            />
            
          </Card.Body>
          </div>
             <button type="button" className="rounded-top-0 btn btn-light border-top ">
          Mostra tutto <i className="bi bi-arrow-right"></i>
        </button>
        </Card>
      </Col>
    </Row>
  );
};

export default OtherProfile;
