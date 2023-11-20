import React from 'react';
import './styles/styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { guardarCurso } from '../../services/RegistroServices';


class RegistroCurso extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        courseCode: '',
        name: '',
        programType: '',
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      }
    }));
  }

  async submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const userData = this.state.fields;
      console.log('Datos del formulario:', userData);
      await guardarCurso(
        userData,
      (response) => {
        console.log(response.data);
        alert('Datos guardados con éxito');
      },
      (error) => {
        console.error(error);
        alert('El codigo de curso ya se encuentra registrado por favor ingrese uno diferente');

      }
      );
      this.setState({
        fields: {
          courseCode: '',
          name: '',
          programType: '',
        },
        errors: {},
      });
    }
  
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["courseCode"]) {
      formIsValid = false;
      errors["courseCode"] = "*Por favor ingrese un codigo del curso";
    }

    if (typeof fields["courseCode"] !== "undefined") {
      if (!fields["courseCode"].match(/^[0-9]{4}$/)) {
        formIsValid = false;
        errors["courseCode"] = "*Por favor ingrese codigo del curso valido.";
      }
    }

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Por favor ingrese un nombre del curso";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registro Curso</h3>
         {/*
          <div>
            <Form.Group widths="four" style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
              <Form.Control type="text" placeholder="Ingrese el codigo del curso" className="custom-search-input" />
              <Button variant="primary" >Buscar</Button>{' '}
            </Form.Group>
          </div>
        */}
          
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label className="center-label">Codigo del Curso:</label>
            <input type="text" className="custom-search-input" name="courseCode" value={this.state.fields.courseCode} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.courseCode}</div>
            <label className="center-label" >Nombre del Curso:</label>
            <input type="text" name="name"className="custom-search-input" value={this.state.fields.name} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.name}</div>
            <label className="center-label">Dependencia:</label>
            <select name="programType" className="custom-search-input"  style={{ height: "40px" }} value={this.state.fields.programType} onChange={this.handleChange}>
            <option value="selecionar">SELECIONAR</option>
            <option value="PREGRADO">PREGRADO</option>
            <option value="POSGRADO">POSGRADO</option>
            </select>
            <div style={{ marginBottom: "20px" }}></div>
            <input type="submit" className="button" value="Guardar" />
           {/* <input type="submit" className="button" value="Eliminar" /> */}
          </form>
        </div>
      </div>

    );
  }


}


  export default RegistroCurso;