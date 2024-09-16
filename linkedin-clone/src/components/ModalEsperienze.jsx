import { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useSelector } from "react-redux"

function ModalEsperienze(props) {
    const [exp, setExp] = useState({
        role: '',
        area: '',
        company: '',
        description: '',
        startDate: '',
        endDate: '',
    })
    const token = useSelector(state => state.token.token)
    const retrieveModify = async () => {
        if (props.mod) {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences/${props.elementId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    const expTomod = await response.json()
                    setExp({
                        role: expTomod.role,
                        area: expTomod.area,
                        company: expTomod.company,
                        description: expTomod.description,
                        startDate: expTomod.startDate.slice(0, 16),
                        endDate: expTomod.endDate.slice(0, 16),
                    })
                }
            } catch (err) {
                alert(err)
            }
        } else {
            setExp({
                role: '',
                area: '',
                company: '',
                description: '',
                startDate: '',
                endDate: '',
            })
        }
    }
    useEffect(() => {
        if (props.show) {
            retrieveModify()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.show])

    const [img, setImg] = useState(undefined)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences', {
                method: 'POST',
                body: JSON.stringify(exp),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                let formData = new FormData()
                formData.append('experience', img)
                const response2 = await fetch(`https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences/${data._id}/picture`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                if (response2.ok) {
                    console.log('Evvivaaaa')
                    setExp({
                        role: '',
                        area: '',
                        company: '',
                        description: '',
                        startDate: '',
                        endDate: '',
                    })
                }
            } else {
                throw new Error('ooops')
            }
        } catch (err) {
            alert(err)
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        const confirm = window.confirm('Sei sicuro?')
        if (confirm) {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences/${props.elementId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert('Esperienza cancellata')
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
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences/${props.elementId}`, {
                method: 'PUT',
                body: JSON.stringify(exp),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                if (img) {
                    let formData = new FormData()
                    formData.append('experience', img)
                    const response2 = await fetch(`https://striveschool-api.herokuapp.com/api/profile/66deae8e4d0def0015cef0fc/experiences/${props.elementId}/picture`, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    if (response2.ok) {
                        console.log('Evvivaaaa')
                        setExp({
                            role: '',
                            area: '',
                            company: '',
                            description: '',
                            startDate: '',
                            endDate: '',
                        })
                    }
                }
                alert('Esperienza modificata con successo')

            } else {
                throw new Error('Qualcosa è andato storto')
            }
        } catch (err) {
            alert(err)
        }
    }
    return (
        <Modal show={props.show} onHide={props.handleClose} scrollable className='modalePost'>
            <Modal.Header closeButton>
                <Modal.Title>{props.mod ? 'Modifica esperienza' : 'Aggiungi esperienza'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Qualifica</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Esempio: Web Developer"
                            autoFocus
                            required
                            value={exp.role}
                            onChange={(e) => setExp({
                                ...exp,
                                role: e.target.value
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nome azienda</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Esempio: Microsoft"
                            autoFocus
                            required
                            value={exp.company}
                            onChange={(e) => setExp({
                                ...exp,
                                company: e.target.value
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Località</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Esempio: Milano"
                            autoFocus
                            required
                            value={exp.area}
                            onChange={(e) => setExp({
                                ...exp,
                                area: e.target.value
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Data di inizio</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            autoFocus
                            required
                            value={exp.startDate}
                            onChange={(e) => setExp({
                                ...exp,
                                startDate: e.target.value
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Data fine</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            autoFocus
                            required
                            value={exp.endDate}
                            onChange={(e) => setExp({
                                ...exp,
                                endDate: e.target.value
                            })}

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Upload immagine</Form.Label>
                        <Form.Control
                            type="file"
                            autoFocus
                            required
                            onChange={(e) => {
                                setImg(e.target.files[0])
                            }}

                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control as="textarea" rows={3} value={exp.description}
                            onChange={(e) => setExp({
                                ...exp,
                                description: e.target.value
                            })} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {
                    props.mod ? (
                        <>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Chiudi
                            </Button>
                            <Button variant="danger" onClick={(e) => {
                                handleDelete(e)
                            }}>
                                Elimina esperienza
                            </Button>
                            <Button variant="primary" onClick={(e) => {
                                handleModify(e)
                            }}>
                                Modifica esperienza
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Chiudi
                            </Button>
                            <Button variant="primary" onClick={(e) => {
                                handleSubmit(e)
                            }}>
                                Salva esperienza
                            </Button>
                        </>
                    )
                }

            </Modal.Footer>
        </Modal>
    )
}

export default ModalEsperienze