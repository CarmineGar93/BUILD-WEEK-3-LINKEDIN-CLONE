import { Modal, Button, Form } from "react-bootstrap";
import { FaTrash, FaImage } from "react-icons/fa"
const ModaleImmagine = ({ show, handleClose, selectedFile, handleFileChange, uploadImage, userId }) => {
  const handleSubmit = () => {
    if (selectedFile) {
      uploadImage(userId, selectedFile);
      handleClose();
    } else {
      alert("Seleziona un file prima di continuare.");
    }
  };

  return (
   <Modal show={show} onHide={handleClose} className="custom-modal" >
      <Modal.Header closeButton>
        <Modal.Title>Modifica Immagine Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Seleziona una nuova immagine</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annulla
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModaleImmagine;