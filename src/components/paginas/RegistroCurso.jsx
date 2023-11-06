import React from 'react';
import './styles/styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class RegistroCurso extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["idCurso"] = "";
      fields["nameCurso"] = "";
      fields["dependencia"] = "";
      fields["semestre"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["idCurso"]) {
      formIsValid = false;
      errors["idCurso"] = "*Por favor ingrese un codigo del curso";
    }

    if (typeof fields["idCurso"] !== "undefined") {
      if (!fields["idCurso"].match(/^[0-9]{4}$/)) {
        formIsValid = false;
        errors["idCurso"] = "*Por favor ingrese codigo del curso valido.";
      }
    }

    if (!fields["nameCurso"]) {
      formIsValid = false;
      errors["nameCurso"] = "*Por favor ingrese un nombre del curso";
    }


    if (!fields["semestre"]) {
      formIsValid = false;
      errors["semestre"] = "*Por favor ingrese un semestre.";
    }

    if (typeof fields["semestre"] !== "undefined") {
      if (!fields["semestre"].match(/^[0-9]{4}$/)) {
        formIsValid = false;
        errors["semestre"] = "*Por favor ingrese un semestre valido.";
      }
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
          <div>
            <Form.Group widths="four" style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
              <Form.Control type="text" placeholder="Ingrese el codigo del curso" className="custom-search-input" />
              <Button variant="primary" >Buscar</Button>{' '}
            </Form.Group>
          </div>
          
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label className="center-label">Codigo del Curso:</label>
            <input type="text" className="custom-search-input" name="idCurso" value={this.state.fields.name} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.idCurso}</div>
            <label className="center-label" >Nombre del Curso:</label>
            <input type="text" name="nameCurso"className="custom-search-input" value={this.state.fields.nameCurso} onChange={this.handleChange} />
            <label className="center-label">Dependencia:</label>
            <select name="dependencia" className="custom-search-input"  style={{ height: "40px" }} value={this.state.fields.dependencia} onChange={this.handleChange}>
            <option value="Pregrado">Pregrado</option>
            <option value="Postgrado">Postgrado</option>
            </select>
            <div style={{ marginBottom: "20px" }}></div>
            <label className="center-label">Semestre:</label>
            <input type="text" name="semestre"className="custom-search-input"  value={this.state.fields.semestre} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.semestre}</div>
            <input type="submit" className="button" value="Guardar" />
            <input type="submit" className="button" value="Eliminar" />
          </form>
        </div>
      </div>

    );
  }


}


  export default RegistroCurso;