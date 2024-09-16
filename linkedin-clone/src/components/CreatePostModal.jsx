import { useState, useRef } from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RetrievePostAction } from '../redux/actions'
import { useEffect } from 'react'

function CreatePostModal(props) {
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const [preview, setPreview] = useState(null)
    const [img, setImg] = useState(null)
    const user = useSelector(state => state.user.user_logged)
    const [post, setPost] = useState({
        text: ''
    })
    const handleChange = (e) => {
        setImg(e.target.files[0])
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            setPreview(reader.result)
        }

        reader.readAsDataURL(file)
    }
    const retrieveModify = async () => {
        if (props.mod) {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.id}`, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    const postTomod = await response.json()
                    setPost({
                        text: postTomod.text
                    })
                }
            } catch (err) {
                alert(err)
            }
        } else {
            setImg(null)
            setPreview(null)
            setPost({
                text: ''
            })
        }
    }
    const handleSubmit = async (e) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                body: JSON.stringify(post),
                method: 'POST',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
                    "Content-type": "application/json",
                }
            })
            if (response.ok) {
                const data = await response.json()
                if (img) {
                    let formData = new FormData()
                    formData.append('post', img)
                    const response2 = await fetch(` https://striveschool-api.herokuapp.com/api/posts/${data._id}`, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
                        },
                    })
                    if (response2.ok) {
                        alert('Post pubblicato con successo')
                        dispatch(RetrievePostAction())
                        props.close()
                    } else {
                        throw new Error('Errore')
                    }
                } else {
                    alert('Post pubblicato con successo')
                    dispatch(RetrievePostAction())
                    props.close()
                }
                setImg(null)
                setPreview(null)
                setPost({
                    text: ''
                })
            } else {
                throw new Error('Errore nella pubblicazione')
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        const confirm = window.confirm('Sei sicuro?')
        if (confirm) {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert('Post cancellato')
                    dispatch(RetrievePostAction())
                    props.close()
                } else {
                    throw new Error('Non si può')
                }
            } catch (err) {
                alert(err)
            }
        }
    }
    const handleModify = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.id}`, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                if (img) {
                    let formData = new FormData()
                    formData.append('post', img)
                    const response2 = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props._id}`, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYWU4ZTRkMGRlZjAwMTVjZWYwZmMiLCJpYXQiOjE3MjU4Njk3MTAsImV4cCI6MTcyNzA3OTMxMH0.i5d01PoeGodN6ArYB1_1dWhujI8O_qYvSQ3eu3VwC0Y',
                        },
                    })
                    if (response2.ok) {
                        alert('Post modificato con successo')
                        dispatch(RetrievePostAction())
                        props.close()
                    } else {
                        throw new Error('Errore')
                    }
                } else {
                    alert('Post modificato con successo')
                    dispatch(RetrievePostAction())
                    setImg(null)
                    setPreview(null)
                    setPost({
                        text: ''
                    })
                    props.close()
                }

            } else {
                throw new Error('Qualcosa è andato storto')
            }
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        if (props.show) {
            retrieveModify()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.show])
    return (
        <Modal show={props.show} onHide={props.close} size='lg' className='modale-post' scrollable>
            <Modal.Header closeButton className=' border-bottom-0 pb-0'>

            </Modal.Header>
            <Modal.Body className='pt-0'>
                <Row className='g-1 mb-3'>
                    <Col xs={'auto'} className='d-flex btn-experience py-2 px-3 align-items-center rounded-4'>
                        <div>
                            <img src={user.image} alt="" width={60} height={60} className='rounded-circle me-2' />
                        </div>
                        <div>
                            <h5 className='mb-0'>{user.name} {user.surname} <i class="bi bi-caret-down-fill text-secondary fs-6"></i></h5>
                            <p className='mb-0'>Pubblica: Chiuque</p>
                        </div>
                    </Col>
                </Row>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Control as="textarea" placeholder='Di cosa vorresti parlare?' className='border-0 custom-focus' rows={5}
                            value={post.text} onChange={(e) => setPost({
                                ...post,
                                text: e.target.value
                            })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='file' ref={inputRef} className='d-none' onChange={(e) => {
                            handleChange(e)
                        }}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                {
                    preview && (
                        <Row className=' justify-content-center my-2'>
                            <Col xs={10}>
                                <img src={preview} alt="" className='img-fluid' />
                            </Col>
                        </Row>
                    )
                }
                <Row className='px-3 g-3'>
                    <Col xs={'auto'}>
                        <button className="btn-experience bg-white border-0 rounded-circle px-2 py-1" onClick={() => inputRef.current.click()}><i className="bi bi-card-image text-secondary fs-5"></i></button>
                    </Col>
                    <Col xs={'auto'}>
                        <button className="btn-experience bg-white border-0 rounded-circle px-2 py-1"><i className="bi bi-calendar-week fs-5 text-secondary"></i></button>

                    </Col>
                    <Col xs={'auto'}>
                        <button className="btn-experience bg-white border-0 rounded-circle px-2 py-1"><i className="bi bi-patch-minus-fill fs-5 text-secondary"></i></button>

                    </Col>
                    <Col xs={'auto'}>
                        <button className="btn-experience bg-white border-0 rounded-circle px-2 py-1"><i className="bi bi-plus-lg text-secondary fs-5"></i></button>

                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                {
                    props.mod ? (
                        <>

                            <Button variant="danger" className='rounded-5 px-3 py-1' onClick={(e) => {
                                handleDelete(e)
                            }}>
                                Elimina post
                            </Button>
                            <Button variant="primary" className='rounded-5 px-3 py-1' onClick={(e) => {
                                handleModify(e)
                            }}>
                                Modifica post
                            </Button>
                        </>
                    ) : (
                        <>
                            <i className="bi bi-clock me-2 fs-5 text-black mb-2"></i>
                            <Button variant="primary" onClick={(e) => {
                                handleSubmit()
                                props.close()
                            }} disabled={post.text ? false : true} className='rounded-5 px-3 py-1'>
                                Pubblica
                            </Button>
                        </>
                    )
                }

            </Modal.Footer>
        </Modal>
    )
}

export default CreatePostModal