import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Nabvar = () => {

return(
  <Navbar expand="lg" className="bg-body-tertiary">
  
  <Container>
    <Navbar.Brand href="/Inicio">Inicio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/RegistroActividades">Registro actividad</Nav.Link>
        <NavDropdown title="Administrar" id="basic-nav-dropdown">
          <NavDropdown.Item href="/FormularioRegistro">Registro docente</NavDropdown.Item>
          <NavDropdown.Item href="/RegistroGrupo">Registro grupo</NavDropdown.Item>
          <NavDropdown.Item href="/RegistroCurso">Registro curso</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default Nabvar;