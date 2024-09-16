import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import rubik from "../rubik.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const newsItems = [
  {
    title: "I migliori MBA per dare slancio alla tua carriera",
    date: "6 giorni fa • 16.588 lettori",
  },
  {
    title: "Allenare il pensiero strategico",
    date: "1 giorno fa • 6.063 lettori",
  },
  { title: "A supporto dei colleghi", date: "5 ore fa • 3.347 lettori" },
  {
    title: "I lavori più richiesti nei prossimi 5 anni",
    date: "2 giorni fa • 1.494 lettori",
  },
  {
    title: "Che si dice della Nutella vegana",
    date: "2 giorni fa • 754 lettori",
  },
  {
    title: "Nuove tendenze del mercato del lavoro",
    date: "3 giorni fa • 1.234 lettori",
  },
  {
    title: "Strategie di marketing per il 2024",
    date: "4 giorni fa • 987 lettori",
  },
  {
    title: "Tecnologie emergenti da tenere d'occhio",
    date: "5 giorni fa • 765 lettori",
  },
  {
    title: "Guida ai corsi online più popolari",
    date: "6 giorni fa • 432 lettori",
  },
  {
    title: "Il futuro della sostenibilità aziendale",
    date: "7 giorni fa • 654 lettori",
  },
];

const NewsCardComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="news-card mt-3">
      <Card.Body className="p-0">
        <Card.Title className="fw-semibold p-3 pb-0">
          LinkedIn Notizie
        </Card.Title>

        <Card.Subtitle className="p-3 pb-2 text-secondary pt-2">
          Storie principali
        </Card.Subtitle>

        {newsItems
          .slice(0, expanded ? newsItems.length : 5)
          .map((item, index) => (
            <Card.Text key={index} className="news-item px-3 py-0">
              <span className="news-title fw-semibold">
                {item.title}
              </span>
              <span className="news-date text-secondary">{item.date}</span>
            </Card.Text>
          ))}

        <Button
          variant="link"
          className="more-link px-3 pt-0 pb-2"
          onClick={handleToggle}
        >
          {expanded ? (
            <>
              Mostra meno <i className="bi bi-caret-up-fill"></i>
            </>
          ) : (
            <>
              Vedi altro <i className="bi bi-caret-down-fill"></i>
            </>
          )}
        </Button>
      </Card.Body>

      <Card.Subtitle className="p-3 pb-2 text-secondary pt-2">
      I giochi di oggi
      </Card.Subtitle>

      <div className="news-item px-3 py-0">
        <Row className="d-flex align-items-center">
          <Col className="p-1 d-flex align-items-center" xs="auto">
            <img src={rubik} alt="" width={50} height={50} />
          </Col>
          <Col className="p-0 fw-semibold d-flex flex-column align-items-start justify-content-center">
            <span>
              Rubik
            </span>
            <span className="text-secondary">Incorona ogni regione</span>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default NewsCardComponent;
