import React from 'react';
import './styles/styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { guardarProfesor } from '../../services/RegistroServices';


class FormularioRegistro extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        name: '',
        lastName: '',
        email: '',
        idDocument: '',
        password: '',
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
      await guardarProfesor(
        userData,
      (response) => {
        console.log(response.data);
        alert('Datos guardados con éxito');
      },
      (error) => {
        console.error(error);
        alert('error al guardar los datos');

      }
      );
      this.setState({
        fields: {
          name: '',
          lastName: '',
          email: '',
          idDocument: '',
          password: '',
        },
        errors: {},
      });
    }
  
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Por favor ingrese un nombre";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Por favor ingrese solo letras del alfabeto";
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Por favor ingrese un apellido";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Por favor ingrese solo letras del alfabeto";
      }
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Por favor ingrese un email-ID valido.";
      }
    }


    if (typeof fields["idDocument"] !== "undefined") {
      if (!fields["idDocument"].match(/^[0-9]{4,12}$/)) {
        formIsValid = false;
        errors["idDocument"] = "*Por favor ingrese un numero valido que tenga minimo 4 numeros y maximo 12 numeros.";
      }
    }


    if (typeof fields["password"] !== "undefined") {
      const value = fields["password"];
      const letters = value.replace(/[^a-zA-Z]/g, '');
      const numbers = value.replace(/[^0-9]/g, '');
    
      if (value.length !== 6 || letters.length !== 3 || numbers.length !== 3) {
        formIsValid = false;
        errors["password"] = "*Por favor ingrese una contraseña de 6 carateres con 3 letras y 3 numeros.";
      }
    }
    /*
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    */

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registro Docente</h3>
          <div>
            <Form.Group widths="four" style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
              <Form.Control type="text" placeholder="Ingrese el numero de cedula" className="custom-search-input" />
              <Button variant="primary" >Buscar</Button>{' '}
            </Form.Group>
          </div>
          
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label className="center-label">Nombre:</label>
            <input type="text" className="custom-search-input" name="name" value={this.state.fields.name} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.name}</div>
            <label className="center-label" >Apellido:</label>
            <input type="text" name="lastName"className="custom-search-input" value={this.state.fields.lastName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.lastName}</div>
            <label className="center-label" >Email:</label>
            <input type="text" name="email" className="custom-search-input" value={this.state.fields.email} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.email}</div>
            <label className="center-label">N° identificacion:</label>
            <input type="text" name="idDocument"className="custom-search-input"  value={this.state.fields.idDocument} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.idDocument}</div>
            <label className="center-label">password:</label>
            <input type="password" name="password" className="custom-search-input" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button" value="Guardar" />
            <input type="submit" className="button" value="Inhabilitar" />
          </form>
        </div>
      </div>

    );
  }


}


export default FormularioRegistro;