import { Col, Container, Row } from 'react-bootstrap'
import JobsSuggested from './JobsSuggested'
import RandomJobs from './RandomJobs'
import { useSelector } from 'react-redux'

function JobsCentral() {
    const jobs = useSelector(state => state.jobs.jobs_list)
    return (
        <Container className="px-0 mt-3">
            {
                jobs && (
                    <>
                        <Row>
                            <Col xs={12}>
                                <JobsSuggested />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col xs={12}>
                                <RandomJobs />
                            </Col>
                        </Row>
                    </>

                )
            }

        </Container>
    )
}

export default JobsCentral