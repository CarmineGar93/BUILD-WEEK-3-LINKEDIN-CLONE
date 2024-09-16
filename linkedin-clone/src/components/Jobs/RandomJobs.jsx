import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import linkedin from '../../linkedin.svg'

function RandomJobs() {
    const [expanded, setExpanded] = useState(false);
    const [random, setRandom] = useState([])
    const jobs = useSelector(state => state.jobs.jobs_list)
    const handleExpand = () => {
        setExpanded(!expanded);
    };
    const Randomize = (jobs) => {
        const randomArray = []
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.floor(Math.random() * jobs.length)
            randomArray.push(jobs[randomNumber])
        }
        return randomArray
    }
    useEffect(() => {
        if (jobs) {
            setRandom(Randomize(jobs))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jobs])
    return (
        <Card >
            {
                jobs && (
                    <>
                        <Card.Body className="pb-0">
                            <Card.Title>Altre offerte di lavoro per te</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Sulla base del tuo profilo e della tua cronologia delle ricerche</Card.Subtitle>
                            <div id="jobs">
                                {
                                    random.slice(0, expanded ? random.length : 5).map(job => {
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

export default RandomJobs
