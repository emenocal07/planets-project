import { Button, Container, Form, FormControl, Nav, Navbar, } from 'react-bootstrap'
import './Navigation.css'


const Navigation = () => {

    return (


<Navbar  bg="dark" variant="dark" expand="lg" className='navBar'>
<Container fluid>
<Navbar.Brand href="/">_lookUp</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/crear">Crear</Nav.Link>
      <Nav.Link href="/planetas">Planetas</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
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