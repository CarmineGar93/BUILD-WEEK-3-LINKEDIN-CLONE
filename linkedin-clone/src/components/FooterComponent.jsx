import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterComponent() {
  return (
    <Container md={10}>
      <Row className="justify-content-center">
        <Col md={2} className="me-2">
          <Row className="mb-2">
            <a href="#a">Informazioni</a>
          </Row>
          <Row className="mb-2">
            <a href="#b">Informativa sulla community professionale</a>
          </Row>
          <Row className="mb-4">
            <div className="p-0 dropdown">
              <a
                className="dropdown-toggle"
                href="#c"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Privacy e condizioni
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#d">
                  Informativa sulla privacy
                </a>
                <a className="dropdown-item" href="#e">
                  Contratto di licenza
                </a>
                <a className="dropdown-item" href="#f">
                  Termini e condizioni delle pagine
                </a>
                <a className="dropdown-item" href="#g">
                  Informativa sui cookie
                </a>
                <a className="dropdown-item" href="#h">
                  Informativa sul copyright
                </a>
              </div>
            </div>
          </Row>
          <Row className="mb-2">
            <a href="#1">Sales Solutions</a>
          </Row>
          <Row className="mb-4">
            <a href="#l">Centro sicurezza</a>
          </Row>
          <Row className="mb-4">
            <a className="fw-light" href="#m">
              Linkedin Corporation © 2024
            </a>
          </Row>
        </Col>
        <Col md={1} className="me-4">
          <Row className="mb-2">
            <a href="#n">Accessibilità</a>
          </Row>
          <Row className="mb-4">
            <a href="#o">Carriera</a>
          </Row>
          <Row className="mb-2">
            <a href="#p">Opzione per gli annunci pubblicitari</a>
          </Row>
          <Row className="mb-2">
            <a href="#q">Mobile</a>
          </Row>
        </Col>
        <Col md={2} className="me-3">
          <Row className="mb-2">
            <a href="#r">Talent Solutions</a>
          </Row>
          <Row className="mb-4">
            <a href="#s">Soluzioni di marketing</a>
          </Row>
          <Row className="mb-4">
            <a href="#t">Pubblicità</a>
          </Row>
          <Row className="mb-2">
            <a href="#u">Piccole imprese</a>
          </Row>
        </Col>
        <Col md={3} className="pe-0">
          {/* Correggo la struttura delle righe e colonne */}
          <Row className="mb-3">
            <Col xs="auto" className="p-0">
              <i className="icone bi bi-question-circle-fill fs-5"></i>
            </Col>
            <Col>
              <a className="fw-bold" href="#v">
                Domande?
              </a>
              <p>Visita il nostro Centro assistenza.</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs="auto" className="p-0">
              <i className="icone bi bi-gear-fill fs-5"></i>
            </Col>
            <Col>
              <a className="fw-bold" href="#w">
                Gestisci il tuo account e la tua privacy.
              </a>
              <p>Vai alle impostazioni</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs="auto" className="p-0">
              <i className="icone bi bi-shield-shaded fs-5"></i>
            </Col>
            <Col>
              <a className="fw-bold" href="#x">
                Trasparenza sui contenuti consigliati
              </a>
              <p>Scopri di più sui contenuti consigliati.</p>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <Row>
            <p className="m-0">Seleziona lingua</p>
            <div className="p-0 dropdown">
              <a
                className="btn btn-light btn-outline-dark dropdown-toggle"
                href="#y"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Italiano(Italian)
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#z">
                  English
                </a>
                <a className="dropdown-item" href="#aa">
                  Español
                </a>
                <a className="dropdown-item" href="#bb">
                  Français
                </a>
                <a className="dropdown-item" href="#cc">
                  Deutsch
                </a>
                <a className="dropdown-item" href="#dd">
                  Bahasa Indonesia
                </a>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterComponent;
