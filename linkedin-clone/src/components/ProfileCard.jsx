// src/components/ProfileCard.js
import React, { useEffect, useState } from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { IoIosLock } from 'react-icons/io';

const ProfileCard = ({ userId, image }) => {
  const [user, setUser] = useState(null); // Stato locale per memorizzare i dati dell'utente
  const [loading, setLoading] = useState(true); // Stato per la gestione del caricamento
  const [error, setError] = useState(null); // Stato per gestire eventuali errori

  // Funzione per recuperare i profili utente
  const fetchProfile = async (userId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // Imposta i dati utente nello stato
        setLoading(false); // Disabilita il caricamento
      } else {
        throw new Error('Errore nel recupero del profilo utente');
      }
    } catch (err) {
      setError(err.message); // Gestione dell'errore
      setLoading(false);
    }
  };

  // useEffect per richiamare la funzione fetch quando il componente viene montato
  useEffect(() => {
    if (userId) {
      fetchProfile(userId);
    }
  }, [userId]);

  // Rende un messaggio di caricamento o di errore se necessario
  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  // Renderizza il profilo utente se disponibile
  return (
    <Row className="mb-3">
      <div className="d-flex">
        <Col md={2}>
         
          <img src={image} alt="Profile" className="circular-image" />
        </Col>
        <div className="d-flex flex-column ms-2 flex-grow-2">
          <Col md={10} className="ms-2 ms-lg-3">
            <Card.Title className="mb-2 text-black">
              {user.name}{' '}
              <span className="text-secondary mb-3 fw-normal">. 3° +</span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-black fw-normal">
              {user.title}
            </Card.Subtitle>
            
            <Button variant="outline-primary" className="d-flex altezza btn-md mb-2 rounded-pill">
              
              <IoIosLock className="mt-1 me-1" />
              Messaggio
            </Button>
          </Col>
        </div>
      </div>
    </Row>
  );
};

export default ProfileCard;
