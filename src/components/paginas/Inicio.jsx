import React from 'react';
import Footer from '../navegacion/Footer';
import  Navbar from '../navegacion/Nabvar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Inicio = () => {

  return (
    <div>
    <div>
    <Form.Control type="text" placeholder="Ingrese el numero de cedula" />
    <Button variant="light">Buscar</Button>{' '}
    </div>
    
    
   


    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Agregar</Button>
      <Button variant="secondary">Borrar</Button>
      <Button variant="secondary">Guardar</Button>
    </ButtonGroup>

    <Footer/>

    </div>
  )
}

export default Inicio

