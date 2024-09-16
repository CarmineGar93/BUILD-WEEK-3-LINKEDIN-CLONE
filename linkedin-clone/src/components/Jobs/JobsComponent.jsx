import RightFooter from "../RightFooter"
import { Container, Row, Col } from "react-bootstrap"
import HomeSidebar from "../HomeSidebar"
import JobsCentral from "./JobsCentral"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { RetrieveJobsAction } from "../../redux/actions"

function JobComponent() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(RetrieveJobsAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={4} lg={3}>
                <HomeSidebar/>
            </Col>
            <Col xs={12} md={8} lg={5} xl={6}>
                {/* Fare un componente che ne racchiuda altri */}
                <JobsCentral />
            </Col>
            <Col xs={12} md={8} lg={4} xl={3} className="offset-md-4 offset-lg-0">
                <RightFooter />
            </Col>
        </Row>
    </Container>
    )
}

export default JobComponent