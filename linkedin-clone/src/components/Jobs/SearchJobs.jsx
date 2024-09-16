import { Container, Row, Col } from "react-bootstrap"
import SearchDetails from '../Jobs/SearchDetails'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { RetrieveSearchAction } from "../../redux/actions"
import ResultsJobs from "./ResultsJobs"



function SearchJobs() {
    const searched = useSelector(state => state.search.searched)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RetrieveSearchAction(searched))
    })
    return (
        <Container>
            <Row className="justify-content-center g-0">
                <Col xs={12} md={6}>
                    <ResultsJobs />
                </Col>
                <Col xs={12} md={6}>
                    {/* Fare un componente che ne racchiuda altri */}
                    <SearchDetails />
                </Col>
            </Row>
        </Container>
    )
}

export default SearchJobs