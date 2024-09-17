import { Card, Col, Container, Row } from "react-bootstrap"
import plus from '../plus.svg'
import { useSelector } from "react-redux"
import { GoPencil } from 'react-icons/go';
import { useState } from "react";
import ModalEsperienze from "./ModalEsperienze";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RetrieveExperiencesAction } from "../redux/actions";

function Esperienzadin() {
    const [show, setShow] = useState(false)
    const [isModifing, setisModifing] = useState(false)
    const [elementToModify, setElementToModify] = useState('')
    const token = useSelector(state => state.token.token)
    const user = useSelector((state) => state.user.user_logged);
    const profile = useSelector((state) => state.user.profile);
    const dispatch = useDispatch()
    useEffect(() => {
        if (!show) {
            setisModifing(false)
            dispatch(RetrieveExperiencesAction(token, profile._id))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])
    const expList = useSelector(state => state.experiences.exp_list)

    const handleClose = () => {
        setShow(false)
    }
    const differenzaDate = (date1, date2) => {
        let dataInizio = new Date(date1);
        let dataFine = new Date(date2);
        let anni = dataFine.getFullYear() - dataInizio.getFullYear();
        let mesi = dataFine.getMonth() - dataInizio.getMonth();
        if (mesi < 0) {
            anni--;
            mesi += 12;

        }
        return `${anni === 0 ? '' : anni === 1 ? `${anni} anno ` : `${anni} anni `}${mesi === 0 ? '' : mesi === 1 ? `${mesi} mese ` : `${mesi} mesi `}`
    }

    function formatoDataBreve(dataStr) {
        const mesi = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
        let data = new Date(dataStr);
        let mese = mesi[data.getMonth()]
        let anno = data.getFullYear()

        return `${mese} ${anno}`;
    }

    return (
        <Container className="px-0 mt-3">
            <ModalEsperienze show={show} handleClose={handleClose} mod={isModifing} elementId={elementToModify} />
            <Row>
                <Col xs={12}>
                    <Card className="p-4">
                        <Row className=" align-items-end mb-3">
                            <Col xs={'auto'}>
                                <h4>Esperienze</h4>
                            </Col>
                            <Col xs={'auto'} className="ms-auto">
                                {
                                    user._id === profile._id && (
                                        <button className="btn-experience bg-white border-0 rounded-circle p-1" onClick={() => setShow(true)}><img src={plus} alt="" /></button>
                                    )
                                }

                            </Col>
                        </Row>
                        <div id="experiences">
                            {
                                expList.map((exp => {
                                    return (
                                        <Row key={exp._id} className="mb-3 g-1">
                                            <Col xs={2} xl={1}>
                                                <img src={exp.image} alt="" width={50} height={50} />
                                            </Col>
                                            <Col xs={9} xl={10}>
                                                <h6 className="mb-0">{exp.role}</h6>
                                                <p className="mb-0">{exp.company} • {exp.area}</p>
                                                <p className="text-muted">
                                                    {`${formatoDataBreve(exp.startDate)} - ${formatoDataBreve(exp.endDate)} • ${differenzaDate(exp.startDate, exp.endDate)}`}</p>
                                            </Col>
                                            <Col xs={1} className="text-start">
                                                {
                                                    user._id === profile._id && (
                                                        <button className="btn-experience bg-white border-0 rounded-circle p-1 p-lg-2" onClick={() => {
                                                            setisModifing(true)
                                                            setElementToModify(exp._id)
                                                            setShow(true)
                                                        }}><GoPencil className="fs-4" /></button>
                                                    )
                                                }
                                            </Col>
                                        </Row>
                                    )
                                }))
                            }
                        </div>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Esperienzadin