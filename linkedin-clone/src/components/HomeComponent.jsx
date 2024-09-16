import { Container, Row, Col } from "react-bootstrap"
import HomeCentral from "./HomeCentral"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { RetrieveCommentsAction, RetrievePostAction } from "../redux/actions"
import RightSideBar from "./RightSideBar"
import HomeSidebar from "./HomeSidebar"
import { useSelector } from "react-redux"

function HomeComponent() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token.token)
    useEffect(() => {
        dispatch(RetrievePostAction(token))
        dispatch(RetrieveCommentsAction())
    })
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={4} lg={3}>
                    <HomeSidebar />
                </Col>
                <Col xs={12} md={8} lg={5} xl={6}>
                    {/* Fare un componente che ne racchiuda altri */}
                    <HomeCentral />
                </Col>
                <Col xs={12} md={8} lg={4} xl={3} className="offset-md-4 offset-lg-0">
                    <RightSideBar />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeComponent