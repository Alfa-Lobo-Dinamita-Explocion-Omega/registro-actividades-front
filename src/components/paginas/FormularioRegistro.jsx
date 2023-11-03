import React from 'react';
import './styles/styles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class FormularioRegistro extends React.Component {
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
      fields["name"] = "";
      fields["lastName"] = "";
      fields["email"] = "";
      fields["idDocument"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
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

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Por favor ingrese su email.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Por favor ingrese un email-ID valido.";
      }
    }

    if (!fields["idDocument"]) {
      formIsValid = false;
      errors["idDocument"] = "*Por favor ingrese su numero de identificacion.";
    }

    if (typeof fields["idDocument"] !== "undefined") {
      if (!fields["idDocument"].match(/^[0-9]{4}$/)) {
        formIsValid = false;
        errors["idDocument"] = "*Por favor ingrese un numero valido.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Por favor ingrese una contraseña.";
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
            <label>Nombre:</label>
            <input type="text" className="custom-search-input" name="name" value={this.state.fields.name} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.name}</div>
            <label>Apellido:</label>
            <input type="text" name="lastName"className="custom-search-input" value={this.state.fields.lastName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.lastName}</div>
            <label>Email:</label>
            <input type="text" name="email" className="custom-search-input" value={this.state.fields.email} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.email}</div>
            <label>N° identificacion:</label>
            <input type="text" name="idDocument"className="custom-search-input"  value={this.state.fields.idDocument} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.idDocument}</div>
            <label>Password:</label>
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