import React, { useState } from "react"; 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Image } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Collapse } from 'react-bootstrap'; 

const HomeSidebar = () => {
  const userProfile = useSelector((state) => state.user.user_logged);
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Row>
        <Col>
          <Card className="w-100 mt-3 mb-3">
            <div className="d-flex justify-content-center back position-relative">
              <Card.Img
                variant="top"
                src="./55k1z8997gh8dwtihm11aajyq.svg"
                className="img-fluid"
              />
              <Image
                src={userProfile.image}
                className="z-1 position-absolute bottom-0 start-25 mt-4 rounded-circle img-profile img-side"
              />
            </div>
            <Card.Body>
              <Card.Title className="mt-5 text-center ">
                <Link
                  to={"/profile"}
                  className="under text-black hover-underline"
                >
                  {userProfile.name} {userProfile.surname}
                </Link>
              </Card.Title>
              <Card.Text className="text-secondary text-center">
                {userProfile.title}{" "}
              </Card.Text>
              <div className="d-md-none">
                <Button
                  onClick={() => setExpanded(!expanded)} 
                  aria-controls="dropdown-content"
                  aria-expanded={expanded}
                  className="w-100 text-center button-drop"

                >
                  {expanded ? "Mostra meno" : "Scopri di più"} 
                </Button>
                <Collapse in={expanded}>
                  <div id="dropdown-content">
                    <hr />
                    <div className="d-flex justify-content-between hover-div">
                      <div>
                        <Card.Text className="fs-6 lh-1 text-muted mb-1">
                          Collegamenti
                        </Card.Text>
                        <Card.Text className="fs-6 lh-1 mb-2">
                          Espandi la tua rete
                        </Card.Text>
                      </div>
                      <FaUserPlus />
                    </div>
                    <hr />
                    <div className="hover-div">
                      <Card.Text className="fs-6 lh-1 text-muted mb-1 text-secondary mb-2">
                        Fai crescere la tua carriera con <br />
                        Premium
                      </Card.Text>
                      <div className="d-flex justify-content-start mb-1">
                        <img src="./premiun.png" width="24" height="24" alt="Premium" />
                        <Card.Text className="fs-6 lh-1 mb-3 ms-2 fw-semibold hover-text">
                          Prova Premium per 0 Euro
                        </Card.Text>
                      </div>
                      <div className="d-flex justify-content-start ms-1">
                        <FaBookmark />
                        <Card.Text className="fs-6 lh-1 mb-3 ms-3 fw-semibold">
                          Elementi Salvati
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="d-none d-md-block">
                <hr />
                <div className="d-flex justify-content-between hover-div">
                  <div>
                    <Card.Text className="fs-6 lh-1 text-muted mb-1">
                      Collegamenti
                    </Card.Text>
                    <Card.Text className="fs-6 lh-1 mb-2">
                      Espandi la tua rete
                    </Card.Text>
                  </div>
                  <FaUserPlus />
                </div>
                <hr />
                <div className="hover-div">
                  <Card.Text className="fs-6 lh-1 text-muted mb-1 text-secondary mb-2">
                    Fai crescere la tua carriera con <br />
                    Premium
                  </Card.Text>
                  <div className="d-flex justify-content-start mb-1">
                    <img src="./premiun.png" width="24" height="24" alt="Premium" />
                    <Card.Text className="fs-6 lh-1 mb-3 ms-2 fw-semibold hover-text">
                      Prova Premium per 0 Euro
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-start ms-1">
                    <FaBookmark />
                    <Card.Text className="fs-6 lh-1 mb-3 ms-3 fw-semibold">
                      Elementi Salvati
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-md-block">
          <Card>
            <Card.Body>
              <div className="d-flex flex-column">
                <div>
                  <Card.Link
                    href="#"
                    className="ms-0 text-primary fw-semibold hover-underline"
                  >
                    Gruppi
                  </Card.Link>
                </div>
                <div className="d-flex justify-content-between">
                  <Card.Link
                    href="#"
                    className="ms-0 text-primary fw-semibold hover-underline"
                  >
                    Eventi
                  </Card.Link>
                  <FaPlus />
                </div>
                <div>
                  <Card.Link
                    href="#"
                    className="ms-0 text-primary fw-semibold hover-underline"
                  >
                    Hashtag Seguiti
                  </Card.Link>
                </div>
              </div>
            </Card.Body>
            <hr className="mt-1 mb-0" />
            <div className="hover-div">
              <p className="text-center pt-3">Scopri di più</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSidebar;