import { useSelector } from "react-redux"
import { Card, Row, Col, } from "react-bootstrap"
import { GoPencil } from 'react-icons/go';
import CommentsArea from "./CommentsArea";
import { Link } from "react-router-dom";


function PostsComponent({ open, mod }) {
    const user_logged = useSelector(state => state.user.user_logged)
    const comments = useSelector(state => state.posts.comments)
    const calculateTimePassed = (postedTime) => {
        const datePosted = new Date(postedTime)
        const today = new Date()
        const timePassed = today - datePosted
        if (timePassed < 60000) {
            return 'Just now';
        } else if (timePassed < 3600000) {
            return `${Math.floor(timePassed / 60000)} m`;
        } else if (timePassed < 86400000) {
            return `${Math.floor(timePassed / 3600000)} h`;
        } else if (timePassed < 604800000) {
            return `${Math.floor(timePassed / 86400000)} d`;
        } else if (timePassed < 31449600000) {
            return `${Math.floor(timePassed / 604800000)} w`;
        } else {
            return `${Math.floor(timePassed / 31449600000)} y`;
        }
    }
    const posts = useSelector(state => state.posts.list_post)
    return (
        <>
            {
                posts.slice(-50).reverse().map(post => {
                    return (
                        <Card className="mt-3" key={post._id}>
                            <Card.Body>
                                <Row className="g-2">
                                    <Col xs={'auto'}>
                                        <img src={post.user.image} alt="" width={50} height={50} className="rounded-circle" />
                                    </Col>
                                    <Col xs={8} className="">
                                        <Link to={`/profile/${post.user._id}`} className="mb-0 fs-6 text-decoration-none text-black fw-semibold">{post.user.name} {post.user.surname}</Link>
                                        <p className="mb-0 text-muted">{/* {exp.company} • {exp.area} */}{post.user.title}</p>
                                        <p className="mb-0 text-muted">{calculateTimePassed(post.createdAt)} • <i className="bi bi-globe-americas"></i></p>
                                    </Col>
                                    {
                                        post.user._id === user_logged._id ? (
                                            <Col xs={1} className="text-end flex-grow-1">
                                                <button className="btn-experience bg-white border-0 rounded-circle p-1 p-lg-2" onClick={() => {
                                                    mod(post._id)
                                                    open()
                                                }}><GoPencil className="fs-4" /></button>
                                            </Col>
                                        ) : <></>
                                    }
                                </Row>
                                <Row className="my-3">
                                    <Col xs={12}>
                                        <p className="mb-0">{post.text}</p>
                                    </Col>
                                </Row>
                                {
                                    post.image ? (
                                        <Row>
                                            <Col xs={12}>
                                                <img src={post.image} alt="" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    ) : <></>
                                }
                                {
                                    comments.filter(c => c.elementId === post._id).length !== 0 && (
                                        <Row className="mt-3">
                                            <Col xs={12}>
                                                <p className="text-end text-secondary">
                                                    {`${comments.filter(c => c.elementId === post._id).length} ${comments.filter(c => c.elementId === post._id).length === 1 ? 'commento' : 'commenti'}`}</p>
                                            </Col>
                                        </Row>
                                    )
                                }

                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <CommentsArea id={post._id} />
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default PostsComponent