import { Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RetrieveUserAction } from '../redux/actions/index';

const ModaleHero = ({ show, handleClose }) => {
  const user = useSelector((state) => state.user.user_logged);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token)


  const ModifyDataUser = {
    name: user.name,
    surname: user.surname,
    title: user.title,
    bio: user.bio,
    area: user.area,
  };

  const [modify, setModify] = useState(ModifyDataUser);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (modify.name && modify.surname && modify.title && modify.bio && modify.area) {
      fetch("https://striveschool-api.herokuapp.com/api/profile", {
        method: "PUT",
        body: JSON.stringify(modify),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`

        },
      })
        .then((response) => {
          if (response.ok) {
            dispatch(RetrieveUserAction());
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          alert("Salvataggio informazioni utente.");
          dispatch(RetrieveUserAction) // Carica l'immagine se è stata selezionata

        })
        .catch((err) => {
          console.error("Fetch error:", err);
        });
    } else {
      alert("Compila tutti i campi obbligatori per inviare il modulo.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="modal-lg" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Select aria-label="Default select example">
            <option>Migliora il tuo profilo con Premium</option>
            <option value="1">
              Sposta in alto le sezioni del profilo che{" "}
            </option>
          </Form.Select>
          <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
            <p className="text-secondary"> * Indica che è obbligatorio</p>
            <Form.Label>Nome *</Form.Label>
            <Form.Control
              value={modify.name}
              onChange={(e) => {
                setModify({
                  ...modify,
                  name: e.target.value,
                });
              }}
              required
              type="text"
              placeholder="Ferdinand..."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mb-3 mt-3">Cognome *</Form.Label>
            <Form.Control
              placeholder="proppotti..."
              value={modify.surname}
              onChange={(e) => {
                setModify({
                  ...modify,
                  surname: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2">Sommario *</Form.Label>
            <Form.Control
              required
              type="text"
              value={modify.title}
              onChange={(e) => {
                setModify({
                  ...modify,
                  title: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2">Bio *</Form.Label>
            <Form.Control
              placeholder="Bio..."
              required
              type="text"
              value={modify.bio}
              onChange={(e) => {
                setModify({
                  ...modify,
                  bio: e.target.value,
                });
              }}
            />
            <Form.Label className="mt-2">Area *</Form.Label>
            <Form.Control
              required
              placeholder="Monza Brianza..."
              type="text"
              value={modify.area}
              onChange={(e) => {
                setModify({
                  ...modify,
                  area: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type='submit'
          variant="primary"
          onClick={(e) => {
            handleSubmit(e);
            handleClose(e);
          }}
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModaleHero;