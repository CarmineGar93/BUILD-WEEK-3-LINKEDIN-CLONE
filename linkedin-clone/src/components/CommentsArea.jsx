import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Form, Button } from "react-bootstrap"
import { useState } from "react";
import { RetrieveCommentsAction } from "../redux/actions";
import SingleComment from "./SingleComment";

function CommentsArea({ id }) {
    const user_logged = useSelector(state => state.user.user_logged)
    const [show, setShow] = useState(false)
    const comments = useSelector(state => state.posts.comments)
    const dispatch = useDispatch()
    const [commentInput, setCommentInput] = useState({
        comment: '',
        elementId: id,
        rate: '5'

    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify(commentInput),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUzZWVmZDgwMDY3ZDAwMTUxMjQzYWUiLCJpYXQiOjE3MjYyMTM4ODUsImV4cCI6MTcyNzQyMzQ4NX0.-6HygptQjzgl39s0PLA-uqo1jkPfjHs6Dtw8XH6oPfI",
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                alert('Commento postato')
                dispatch(RetrieveCommentsAction())
                setCommentInput({
                    comment: '',
                    elementId: id,
                    rete: '5'

                })
            } else {
                throw new Error('Errore')
            }
        } catch (err) {
            alert(err)
        }

    }
    return (
        <>
            <Row className="mb-2">
                <Col xs={3} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2">
                    <i className="bi bi-hand-thumbs-up text-black me-1 fs-5"></i>
                    <span>Consiglia</span>
                </Col>
                <Col xs={3} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2" onClick={() => setShow(!show)}>
                    <i className="bi bi-chat-text text-black me-1 fs-5"></i>
                    <span>Commenta</span>
                </Col>
                <Col xs={4} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2">
                    <i className="bi bi-arrow-left-right text-black me-1 fs-5"></i>
                    <span>Diffondi il post</span>
                </Col>
                <Col xs={2} className="d-flex justify-content-center align-items-center bg-white border-0 text-secondary px-0 py-2 fw-semibold btn-experience rounded-2">
                    <i className="bi bi-send-fill text-black me-1 fs-5"></i>
                    <span>Invia</span>
                </Col>
            </Row>
            {
                show && (
                    <>
                        <Row className=" g-2 align-items-center">
                            <Col xs={'auto'}>
                                <img src={user_logged.image} alt="" className="rounded-circle" width={40} height={40} />
                            </Col>
                            <Col xs={9} className=" flex-grow-1">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control className="rounded-5 border-2 custom-comment-input" type="text" placeholder="Aggiungi un commento..."
                                            value={commentInput.comment} onChange={(e) => setCommentInput({
                                                ...commentInput,
                                                comment: e.target.value
                                            })} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        {
                            commentInput.comment && (
                                <Row className=" mt-2">
                                    <Col className=" offset-1">
                                        <Button variant="primary" className='rounded-5 px-3 py-0 fw-semibold' onClick={(e) => {
                                            handleSubmit(e)
                                        }}>
                                            Pubblica
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        }
                        {
                            comments.filter(c => c.elementId === id).map(com => {
                                return (
                                    <SingleComment singlecomment={com} id={id} />
                                )
                            })
                        }
                    </>
                )
            }

        </>
    )
}

export default CommentsArea