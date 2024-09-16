import { Card, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import linkedin from '../../linkedin.svg'
import { SetSelectedAction } from "../../redux/actions";
import { useEffect } from "react";

function ResultsJobs() {
    const list_searched = useSelector(state => state.search.list_searched)
    const selectedId = useSelector(state => state.search.selected)
    const dispatch = useDispatch()
    useEffect(() => {
        if (list_searched) {
            dispatch(SetSelectedAction(list_searched[0]._id))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list_searched])
    return (
        <Card className="mt-3 modalePost overflow-y-scroll">
            {
                list_searched && (
                    <>
                        <Card.Body className="pb-0 px-1">
                            <Card.Title className="px-2">Le principali offerte di lavoro per te</Card.Title>
                            <Card.Subtitle className="mb-3 px-2 text-muted">Sulla base del tuo profilo e della tua cronologia delle ricerche</Card.Subtitle>
                            <div id="jobs">
                                {
                                    list_searched.slice(0, 25).map(job => {
                                        return (
                                            <Row key={job._id} className={job._id === selectedId ? 'p-2 g-2 pointer custom-selected' : 'p-2 g-2 pointer'} onClick={() => dispatch(SetSelectedAction(job._id))}>
                                                <Col xs={'auto'}>
                                                    <img src='https://static.licdn.com/aero-v1/sc/h/aajlclc14rr2scznz5qm2rj9u' alt="" width={50} height={50} />
                                                </Col>
                                                <Col xs={9} xl={10}>
                                                    <a className="mb-0 fs-6 fw-semibold link-jobs" href="#a">{job.title}</a>
                                                    <p className="mb-3">{job.company_name} • {job.candidate_required_location}</p>
                                                    <p className="text-muted">Promosso • <img src={linkedin} alt='' widt={15} height={15} className="mb-1 me-1"></img>Candidatura semplice</p>
                                                </Col>
                                            </Row>

                                        )
                                    })
                                }

                            </div>

                        </Card.Body>
                    </>
                )
            }

        </Card>
    )
}

export default ResultsJobs