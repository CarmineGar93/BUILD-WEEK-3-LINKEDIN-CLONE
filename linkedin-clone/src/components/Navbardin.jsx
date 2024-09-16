import { Container, Navbar, Nav, Form, NavItem } from "react-bootstrap";
import linkedin from "../linkedin.svg";
import people from "../people.svg";
import bell from "../bell.svg";
import chat from "../chat-square-dots-fill.svg";
import NavDropdowndin from "./NavDropdowndin";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import React, { useState } from 'react';
import { SetSearchAction } from "../redux/actions";


function Navbardin() {
  const location = useLocation().pathname
  const user = useSelector((state) => state.user.user_logged);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(SetSearchAction(inputValue))
    setInputValue('')
    navigate('/search')
  }


  return (
    <Container fluid className="px-0 bg-white border-bottom border-1">
      <Navbar className="py-1">
        <Container className="d-flex align-items-center px-0">
          <Navbar.Brand href="#home" className="ms-5 me-2">
            <img src={linkedin} alt="LinkedIn Logo" />
          </Navbar.Brand>

          {/* Search bar - mantenuta fissa nella sua posizione */}
          <Form className="me-auto ms-2" onSubmit={(e) => handleSubmit(e)}>
            <div className='search-container'>
              <Form.Group controlId="formGroupEmail" className="position-relative">
                <BiSearch className="search-icon" />
                <Form.Control
                  type="search"
                  placeholder="Cerca lavoro"
                  value={inputValue}
                  className={`ps-5 inputSearch ${isExpanded ? 'expanded' : ''}`}
                  onFocus={() => setIsExpanded(true)}
                  onBlur={() => setIsExpanded(false)}
                  onMouseEnter={() => setIsExpanded(true)}
                  onMouseLeave={() => setIsExpanded(false)}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </Form.Group>
            </div>
          </Form>

          <Nav className="d-flex align-items-center ms-0 me-0">
            <Nav.Item className="me-2 me-lg-4">
              <Link
                to="/home"
                className={`nav-link d-flex flex-column align-items-center py-0 ${location === '/home' ? 'border-bottom border-2 border-black' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={location === '/home' ? 'black' : '#666666'} className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                <span>Home</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="me-4 d-none d-lg-block">
              <Nav.Link
                href="#b"
                className="d-flex flex-column align-items-center py-0"
              >
                <img src={people} alt="Rete" />
                <span>Rete</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-2 me-lg-4">
              <Link
                to="/jobs"
                className={`nav-link d-flex flex-column align-items-center py-0 ${location === '/jobs' ? 'border-bottom border-2 border-black' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={location === '/jobs' ? 'black' : '#666666'} className="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                  <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z" />
                </svg>
                <span>Lavoro</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="me-4 d-none d-lg-block">
              <Nav.Link
                href="#d"
                className="d-flex flex-column align-items-center p-0"
              >
                <img src={chat} alt="Lavoro" />
                <span>Messaggistica</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="me-4 d-none d-lg-block">
              <Nav.Link
                href="#e"
                className="d-flex flex-column align-items-center py-0"
              >
                <img src={bell} alt="Notifiche" />
                <span>Notifiche</span>
              </Nav.Link>
            </Nav.Item>

            {/* User profile and dropdown */}
            <NavItem className="d-flex flex-column align-items-center py-0 me-2">
              <img
                src={user.image}
                alt="User"
                width={20}
                height={20}
                className="rounded-5 me-1"
              />
              <NavDropdowndin />
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navbardin;
