import React from 'react';
import { Container, Navbar, Form, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navbarStyle = {
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: '#edf1f6',
  };

  return (
    <>
      <Container>
        <Navbar expand="lg" style={navbarStyle} className="bg-body-#edf1f6 my-2">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Form className="d-flex position-relative ms-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 pr-4"
                style={{ minWidth: '222px', minHeight: '20px',borderRadius:'15px' }}
                aria-label="Search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '18px',
                  transform: 'translateY(-50%)',
                  color: "#080808",
                }} />
            </Form>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown title="Relevance" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="All Brands" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">BMW</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
