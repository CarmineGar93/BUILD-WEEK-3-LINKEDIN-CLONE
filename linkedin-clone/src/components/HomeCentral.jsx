import { Container, Row, Col } from "react-bootstrap"
import CreatePostComponent from "./CreatePostComponent"
import PostsComponent from "./PostsComponent"
import { useState } from "react"
import CreatePostModal from "./CreatePostModal";
import { useEffect } from "react";

function HomeCentral() {
    const [show, setShow] = useState(false)
    const [isModifing, setisModifing] = useState(false)
    const [elementToModify, setElementToModify] = useState('')
    const handleClose = () => {
        setShow(false)
    }
    const handleOpen = () => {
        setShow(true)
    }
    const handleModify = (id) => {
        setElementToModify(id)
        setisModifing(true)
    }
    useEffect(() => {
        if (!show) {
            setisModifing(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])
    return (
        <Container className="px-0 mt-3">
            <CreatePostModal close={handleClose} show={show} mod={isModifing} id={elementToModify} />
            <Row>
                <Col xs={12}>
                    <CreatePostComponent open={handleOpen} />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <PostsComponent open={handleOpen} mod={handleModify} />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeCentral