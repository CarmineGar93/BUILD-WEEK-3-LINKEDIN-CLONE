import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useState } from "react";
import linkedin from '../../linkedin.svg'

function JobsSuggested() {
    const [expanded, setExpanded] = useState(false);
    const jobs = useSelector(state => state.jobs.jobs_list)
    const user = useSelector(state => state.user.user_logged)
    const handleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <Card >
            {
                jobs && (
                    <>
                        <Card.Body className="pb-0">
                            <Card.Title>Le principali offerte di lavoro per te</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Sulla base del tuo profilo e della tua cronologia delle ricerche</Card.Subtitle>
                            <div id="jobs">
                                {
                                    jobs.filter(j => {
                                        return j.title.includes(user.title)
                                    }).slice(0, expanded ? jobs.length : 3).map(job => {
                                        return (
                                            <Row key={job._id} className="my-3 g-2">
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
                        <Row>
                            <Col xs={12}>
                                <button type="button" className="fw-5 rounded-top-0 btn btn-light border-top w-100" onClick={handleExpand}>
                                    {expanded ? 'Nascondi' : 'Mostra tutto'} <i className="bi bi-arrow-right"></i>
                                </button>
                            </Col>
                        </Row>
                    </>
                )
            }

        </Card>
    )
}

export default JobsSuggested


