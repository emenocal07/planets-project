import { Button, Container, Form, FormControl, Nav, Navbar, } from 'react-bootstrap'
import './Navigation.css'
import { NavLink } from 'react-router-dom'


const Navigation = () => {

  return (


    <Navbar bg="dark" variant="dark" expand="lg" className='navBar'>
      <Container fluid>
        <NavLink to='/'>
          <Navbar.Brand as='span'>_lookUp</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            <NavLink to="/planets/create">
              <Nav.Link as='span'>Create fake</Nav.Link>
            </NavLink>

            <NavLink to="/planets">
              <Nav.Link as='span'>Planets</Nav.Link>
            </NavLink>

            <NavLink to="/nasaData">
              <Nav.Link as='span'>gotoNASA</Nav.Link>
            </NavLink>

            <NavLink to="/contacto">
              <Nav.Link as='span'>Contacto</Nav.Link>
            </NavLink>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation