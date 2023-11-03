import React from 'react';


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
          fields["Name"] = "";
          fields["LastName"] = "";
          fields["emailid"] = "";
          fields["phone"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["Name"]) {
        formIsValid = false;
        errors["Name"] = "*Por favor ingrese un nombre";
      }

      if (typeof fields["Name"] !== "undefined") {
        if (!fields["Name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["Name"] = "*Por favor ingrese solo letras del alfabeto";
        }
      }

      if (!fields["LastName"]) {
        formIsValid = false;
        errors["LastName"] = "*Por favor ingrese un apellido";
      }

      if (typeof fields["LastName"] !== "undefined") {
        if (!fields["LastName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["LastName"] = "*Por favor ingrese solo letras del alfabeto";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Por favor ingrese su email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Por favor ingrese un email-ID valido.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Por favor ingrese su numero de identificacion.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{4}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Por favor ingrese un numero valido.";
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
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Nombre</label>
        <input type="text" name="Name" value={this.state.fields.Name} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.Name}</div>
        <label>Apellido</label>
        <input type="text" name="LastName" value={this.state.fields.LastName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.LastName}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default FormularioRegistro;