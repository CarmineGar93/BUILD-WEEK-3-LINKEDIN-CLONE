import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { GoPencil } from 'react-icons/go';
import ModalePost from './ModalePost';
import { useSelector } from 'react-redux';
import CommentsArea from './CommentsArea';

const ActivityCard = () => {
  const [showModal, setShowModal] = useState(false);
  const posts = useSelector(state => state.posts.list_post)
  const user_logged = useSelector(state => state.user.user_logged)
  const profile = useSelector(state => state.user.profile)
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const calculateTimePassed = (postedTime) => {
    const datePosted = new Date(postedTime)
    const today = new Date()
    const timePassed = today - datePosted
    if (timePassed < 60000) {
      return 'Just now';
    } else if (timePassed < 3600000) {
      return `${Math.floor(timePassed / 60000)} m`;
    } else if (timePassed < 86400000) {
      return `${Math.floor(timePassed / 3600000)} h`;
    } else if (timePassed < 604800000) {
      return `${Math.floor(timePassed / 86400000)} d`;
    } else if (timePassed < 31449600000) {
      return `${Math.floor(timePassed / 604800000)} w`;
    } else {
      return `${Math.floor(timePassed / 31449600000)} y`;
    }
  }

  return (
    <>
      <Card className=" cardAttivity mt-3">
        <div className="px-4 pt-4 flex-grow-1 mb-3">
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
            <Col sm={12}>
              {
                posts.filter(p => p.user._id === profile._id).length === 0 ? (
                  <>
                    <h5 className="mb-0 fs-6">Non hai ancora pubblicato niente</h5>
                    <p>I post che condividi appariranno qui.</p>
                  </>
                ) : (
                  <>
                    {
                      posts.filter(p => p.user._id === profile._id).map(post => {
                        return (
                          <Card className="mt-3" key={post._id}>
                            <Card.Body>
                              <Row className="g-2">
                                <Col xs={'auto'}>
                                  <img src={post.user.image} alt="" width={50} height={50} className="rounded-circle" />
                                </Col>
                                <Col xs={8} className="">
                                  <p className="mb-0 fs-6 text-decoration-none text-black fw-semibold">{post.user.name} {post.user.surname}</p>
                                  <p className="mb-0 text-muted">{/* {exp.company} • {exp.area} */}{post.user.title}</p>
                                  <p className="mb-0 text-muted">{calculateTimePassed(post.createdAt)} • <i className="bi bi-globe-americas"></i></p>
                                </Col>
                                {
                                  post.user._id === user_logged._id ? (
                                    <Col xs={1} className="text-end flex-grow-1">
                                      <button className="btn-experience bg-white border-0 rounded-circle p-1 p-lg-2" onClick={() => {
                                      }}><GoPencil className="fs-4" /></button>
                                    </Col>
                                  ) : <></>
                                }
                              </Row>
                              <Row className="my-3">
                                <Col xs={12}>
                                  <p className="mb-0">{post.text}</p>
                                </Col>
                              </Row>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                              <CommentsArea id={post._id} />
                            </Card.Footer>
                          </Card>
                        )
                      })
                    }
                  </>
                )
              }

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