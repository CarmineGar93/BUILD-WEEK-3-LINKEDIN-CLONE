import React, { useState } from "react";
import { Modal, Button, ModalHeader } from "react-bootstrap";
import FooterComponent from "./FooterComponent";

const RightFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <footer className="footerRight py-4 mt-3">
      <div className="container">
        {/* Prima riga: Informazioni e Accessibilità */}
        <div className="d-flex justify-content-center align-items-center mb-3 gap-3">
          <a href="#" className="text-dark">
            Informazioni
          </a>
          <a href="#" className="text-dark">
            Accessibilità
          </a>
        </div>

        {/* Seconda riga */}
        <div className="d-flex flex-wrap justify-content-center align-items-center mb-3 gap-3">
          <a href="#" className="text-dark">
            Centro assistenza
          </a>

          {/* Dropdown per Privacy e condizioni */}
          <div className="p-0 dropdown">
            <a
              className="dropdown-toggle text-dark"
              href="#c"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Privacy e condizioni
            </a>

            <div className="dropdown-menu">
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

          <a href="#" className="text-dark">
            Opzioni per gli annunci pubblicitari
          </a>
          <a href="#" className="text-dark">
            Pubblicità
          </a>

          {/* Dropdown per Servizi alle aziende */}
          <div className="p-0 dropdown">
            <a
              className="dropdown-toggle text-dark"
              href="#c"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Servizi alle aziende
            </a>

            <div className="dropdown-menu">
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

          <a href="#" className="text-dark">
            Scarica l’app LinkedIn
          </a>

          {/* Modale per "Altro" */}
          <Button
            variant="link"
            className="linko text-dark p-0"
            onClick={handleShow}
          >
            Altro <i className="bi bi-chevron-down"></i>
          </Button>
        </div>

        {/* Footer finale */}
        <div className="d-flex justify-content-center align-items-center">
          <img
            width={50}
            className="me-1 "
            src="./Linkedin-Logo.png"
            alt="LinkedIn Logo"
          />
          LinkedIn Corporation © 2024
        </div>
      </div>

      {/* Modale per il pulsante "Altro" */}
      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="custom-modal-title"
        fullscreen
      >
<ModalHeader closeButton>
  </ModalHeader>

        <Modal.Body>
          <img width="100" src="./Linkedin-Logo.png" alt="LinkedIn Logo" />
          <div className="d-flex justify-content-center align-items-center vh-100 position-relative">
            <FooterComponent />
          </div>
        </Modal.Body>


      </Modal>
    </footer>
  );
};

export default RightFooter;
