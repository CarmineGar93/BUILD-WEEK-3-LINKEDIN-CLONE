import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import ModaleHero from "./ModaleHero";
import ModaleImmagine from "./ModaleImmagine";
import { RetrieveUserAction } from "../redux/actions";
import { useDispatch } from "react-redux";


function HeroProfile() {
  const [showImageModal, setShowImageModal] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token)
  const profile = useSelector(state => state.user.profile)
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = useSelector((state) => state.user.user_logged);

  const handleCloseImageModal = () => setShowImageModal(false);
  const handleShowImageModal = () => {
    if (profile._id === user._id) {
      setShowImageModal(true)
    }

  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadImage = async (userId, file) => {
    const formData = new FormData();
    formData.append('profile', file);

    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`

        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Immagine caricata con successo:', data);
        alert('Immagine caricata con successo!');
        dispatch(RetrieveUserAction(token));

        // Aggiorna l'immagine del profilo
        // Potresti voler ricaricare i dati dell'utente qui
      } else {
        console.error('Errore nel caricamento dell\'immagine:', response.status);
        alert('Errore nel caricamento dell\'immagine.');
      }
    } catch (error) {
      console.error('Errore di rete:', error);
      alert('Errore di rete. Riprova.');
    }
  };

  return (
    <Container className="mt-3 px-0">
      <Row>
        <Col xs={12}>
          <Card>
            <div className="position-relative mb-4 mb-xl-5">
              <Card.Img variant="top" src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq" />
              <img
                src={profile.image}
                alt=""
                className="position-absolute z-1 bottom-0 start-0 rounded-circle ms-3 img-profile"
                onClick={handleShowImageModal}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <Card.Body className="d-flex justify-content-between align-items-start">
              <div>
                <Card.Title className="mb-0">
                  {profile.name} {profile.surname}
                </Card.Title>
                <Card.Text className="mb-1">{profile.title}</Card.Text>
                <Card.Text className="text-muted">
                  {profile.area} •{" "}
                  <a href="#a" title="" className="text-decoration-none">
                    Informazioni di contatto
                  </a>
                </Card.Text>

                <Button variant="primary" className="rounded-5 me-2 mt-1">
                  Disponibile per
                </Button>
                <Button
                  variant="outline-primary"
                  className="rounded-5 me-2 mt-1"
                >
                  Aggiungi sezione del profilo
                </Button>
                <Button
                  variant="outline-secondary"
                  className="rounded-5 px-4 mt-1"
                >
                  Altro
                </Button>

                <Row xs={1} lg={2} className="mt-4">
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Text className="mb-0 fw-bold">
                          Disponibile a lavorare
                        </Card.Text>
                        <Card.Text className="mb-0">
                          Rouli di amministrazione
                        </Card.Text>
                        <Card.Link href="#" className="text-decoration-none">
                          Mostra dettagli
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title className="mb-0"></Card.Title>
                        <Card.Text className="mb-0">
                          <span className="fw-bold">
                            Fai sapere ai recruter
                          </span>{" "}
                          che ti interessano offerte di lavoro presso la tua
                          azienda attuale
                        </Card.Text>
                        <Card.Link href="#" className="text-decoration-none">
                          Inizia
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              {
                profile._id === user._id && <button className="btn-experience bg-white border-0 rounded-circle p-1 p-lg-2" onClick={handleShowModal}><GoPencil className="fs-4" /></button>
              }

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModaleImmagine
        show={showImageModal}
        handleClose={handleCloseImageModal}
        selectedFile={selectedFile}
        handleFileChange={handleFileChange}
        uploadImage={uploadImage}
        userId={user._id} />
      <ModaleHero
        show={showModal}
        handleClose={handleCloseModal}
        selectedFile={selectedFile}
        handleFileChange={handleFileChange}
        uploadImage={uploadImage}
        userId={user._id}
      />
    </Container>
  );
}

export default HeroProfile;