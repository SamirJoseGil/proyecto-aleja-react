import { useState, useRef } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';

import Pautas from '../Pages/Pautas';
import Herramientas from '../Pages/Herramientas';
import Desensamble from '../Pages/Desensamble';
import AntesDelEnsamble from '../Pages/AntesDelEnsamble';
import Ensamble from '../Pages/Ensamble';
import JuegosInteractivos from '../Pages/JuegosInteractivos';
import Manual from '../Pages/Manual';

export default function PrincipalPage() {

  const navigate = useNavigate();
  const routes = ['/Manual', '/Manual/Pautas', '/Manual/Herramientas', '/Manual/Desensamble', '/Manual/AntesDelEnsamble', '/Manual/Ensamble', '/Manual/JuegosInteractivos'];
  const [currentPage, setCurrentPage] = useState(0);

  const previousPage = () => {
    const newPage = currentPage > 0 ? currentPage - 1 : routes.length - 1;
    setCurrentPage(newPage);
    navigate(routes[newPage]);
  };

  const nextPage = () => {
    const newPage = currentPage < routes.length - 1 ? currentPage + 1 : 0;
    setCurrentPage(newPage);
    navigate(routes[newPage]);
  };


  const offcanvasRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (offcanvasRef.current) {
      const offcanvasElement = offcanvasRef.current;
      const bsOffcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <div>
     <header>
        <Navbar expand="lg" className="bd-body-tertiary custom-bottom-border">
          <Container fluid>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <h2 className='custom-title margin-left'>TechPage</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar' />
            <Navbar.Offcanvas
              id='offcanvasNavbar'
              aria-labelledby='offcanvasNavbarLabel'
              placement='end'
              ref={offcanvasRef}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel'>Menú de Navegación</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='ms-auto'>
                  <Nav.Link as={Link} to='/Manual' onClick={handleClose}>Inicio</Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to='/Manual/Pautas' onClick={handleClose}>Pautas</Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to='/Manual/Herramientas' onClick={handleClose}>Herramientas</Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to='/Manual/Desensamble' onClick={handleClose}>Desensamble del PC</Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to='/Manual/AntesDelEnsamble' onClick={handleClose}>Antes del Ensamble</Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to='/Manual/Ensamble' onClick={handleClose}>Ensamble</Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to='/Manual/JuegosInteractivos' onClick={handleClose}>Juegos Interactivos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <main>
        <div className='container'>
          <div className='card'>
            <Routes>
              <Route path='/' element={<Manual />} />
              <Route path='/Pautas' element={<Pautas />} />
              <Route path='/Herramientas' element={<Herramientas />} />
              <Route path='/Desensamble' element={<Desensamble />} />
              <Route path='/AntesDelEnsamble' element={<AntesDelEnsamble />} />
              <Route path='/Ensamble' element={<Ensamble />} />
              <Route path='/JuegosInteractivos' element={<JuegosInteractivos />} />
            </Routes>
          </div>
        </div>
        <div className="custom-container text-center custom-buttons">
          <div className="row justify-content-between">
            <button className="btn btn-secondary custom-button blue-background" onClick={previousPage}>Anterior</button>
            <div className="align-self-center custom-buttom-container">
              <span id="page-number" className="custom-number">{currentPage + 1}</span>
            </div>
            <button className="btn btn-secondary custom-button blue-background-reverb" onClick={nextPage}>Siguiente</button>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center">
        <div className="container bg-dark">
          <p>&copy; 2024 Manual de Ensamble y Desensamble de Computadores.</p>
          <p className="bg-dark">
            <a href="https://www.facebook.com/institucioneducativa.jaipera" className="text-white mx-2" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://www.facebook.com/institucioneducativa.jaipera" className="text-white mx-2" target="_blank" rel="noopener noreferrer">Contacto</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
