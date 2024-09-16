import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { RetrieveCommentsAction } from '../redux/actions'

function SingleComment({ singlecomment, id }) {
    const [modify, setModify] = useState(false)
    const [commentToModify, setCommentToModify] = useState({
        comment: singlecomment.comment,
        elementId: id,
        rate: '4'
    })
    const dispatch = useDispatch()
    const handleModify = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${singlecomment._id}`, {
                method: 'PUT',
                body: JSON.stringify(commentToModify),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUzZWVmZDgwMDY3ZDAwMTUxMjQzYWUiLCJpYXQiOjE3MjYyMTM4ODUsImV4cCI6MTcyNzQyMzQ4NX0.-6HygptQjzgl39s0PLA-uqo1jkPfjHs6Dtw8XH6oPfI",
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                alert('Commento salvato con successo')
                dispatch(RetrieveCommentsAction())
                setModify(false)
            } else {
                throw new Error('Errore')
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async () => {
        const confirm = window.confirm('Sei sicuro?')
        if (confirm) {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${singlecomment._id}`, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUzZWVmZDgwMDY3ZDAwMTUxMjQzYWUiLCJpYXQiOjE3MjYyMTM4ODUsImV4cCI6MTcyNzQyMzQ4NX0.-6HygptQjzgl39s0PLA-uqo1jkPfjHs6Dtw8XH6oPfI",
                    }
                })
                if (response.ok) {
                    alert('Commento eliminato con successo')
                    dispatch(RetrieveCommentsAction())
                    setModify(false)
                } else {
                    throw new Error('Errore')
                }
            } catch (err) {
                console.log(err)
            }
        }

    }
    return (
        <Row className="mt-3">
            <Col xs={'auto'}>
                <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt="" className="rounded-circle" width={40} height={40} />
            </Col>
            <Col className=" bg-body-secondary p-2 rounded-end rounded-bottom me-2">
                <Row>
                    <Col xs={10}>
                        <h6>{singlecomment.author}</h6>
                        {
                            modify ? (
                                <Form>
                                    <Form.Group>
                                        <Form.Control autoFocus className='bg-transparent border-0 custom-focus' type='text' value={commentToModify.comment} onChange={(e) => setCommentToModify({
                                            ...commentToModify,
                                            comment: e.target.value
                                        })}></Form.Control>
                                    </Form.Group>
                                    <div className='text-end'>
                                        <Button variant='secondary' className='rounded-5 px-2 py-0 fw-semibold me-1' onClick={() => setModify(false)}>Chiudi</Button>
                                        <Button type='submit' variant="danger" disabled={singlecomment.comment === commentToModify.comment} className='rounded-5 px-2 py-0 fw-semibold' onClick={(e) => {
                                            handleModify(e)
                                        }}>
                                            Modifica
                                        </Button>

                                    </div>

                                </Form>
                            ) : (
                                <p>{singlecomment.comment}</p>
                            )
                        }

                    </Col>
                    <Col xs={2} className="d-flex align-items-start justify-content-end">
                        <i className="bi bi-pencil fs-5 me-2 pointer" onClick={() => setModify(true)}></i>
                        <i className="bi bi-x-lg fs-5 me-2 pointer" onClick={() => handleDelete()}></i>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}

export default SingleComment