import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import suitecase from '../../suitcase.svg'
import people from '../../people.svg'
import parse from 'html-react-parser'

const SearchDetails = () => {
    const selectedId = useSelector(state => state.search.selected)
    const searchedJob = useSelector(state => state.search.list_searched)
    const [jobSelected, setJobSelected] = useState(false)
    useEffect(() => {
        if (searchedJob) {
            setJobSelected(searchedJob.filter(s => {
                return s._id === selectedId
            }))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedId])

    return (
        <Container className='px-0 mt-3 modalePost overflow-y-scroll' >
            <Card className="p-3 border-start-0">
                {
                    jobSelected && (
                        <>
                            <Row className='g-2 mb-2 align-items-center'>
                                <Col xs={'auto'}>
                                    <img src="https://static.licdn.com/aero-v1/sc/h/aajlclc14rr2scznz5qm2rj9u" alt="" width={40} height={40} />
                                </Col>
                                <Col xs={10}>
                                    <a href={jobSelected[0].url} className='fw-semibold fs-6 link-details-custom'>{jobSelected[0].company_name}</a>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col xs={12}>
                                    <a href='#a' title='' className='fw-semibold fs-4 link-details-custom'>{jobSelected[0].title}</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <p className='text-muted'>{jobSelected[0].candidate_required_location} • 30 candidati</p>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col xs={12}>
                                    <div><img src={suitecase} alt="" className='me-2' /><span className='span-custom py-1 px-2 rounded-2'>Da remoto</span> • <span className='span-custom py-1 px-2 rounded-2'>A tempo pieno</span></div>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col xs={12}>
                                    <div><img src={people} alt="" className='me-2' /><span>2 ex dipendenti lavorano qui</span></div>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col xs={12}>
                                    <div><i className="bi bi-lightbulb fs-5"></i> Vedi come ti posizioni rispetto a 5 candidati</div>
                                </Col>
                            </Row>
                            <Row className='my-4'>
                                <Col xs={12}>
                                    <Button variant='primary' className='rounded-5 fw-semibold me-2'>Candidati <i className="bi bi-box-arrow-up-right"></i></Button>
                                    <Button variant='outline-primary' className='rounded-5 fw-semibold'>Salva</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h5>Informazioni sull’offerta di lavoro</h5>
                                    <div>
                                        {parse(jobSelected[0].description)}
                                    </div>

                                </Col>
                            </Row>
                        </>

                    )
                }


            </Card>
        </Container>
    );
};

export default SearchDetails;