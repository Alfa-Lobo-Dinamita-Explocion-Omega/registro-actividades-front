import React from 'react';
import './styles/styles.css';




class RegistroGrupo extends React.Component {
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
      fields["numeroGrupo"] = "";
      fields["modalidad"] = "";
      fields["horario"] = "";
      fields["semestre"] = "";
      fields["cedula"] = "";
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

    if (typeof fields["numeroGrupo"] !== "undefined") {
      if (!fields["numeroGrupo"].match(/^[0-9]{1}$/)) {
        formIsValid = false;
        errors["numeroGrupo"] = "*Por favor ingrese numero de grupo valido.";
      }
    }

    if (!fields["cedula"]) {
      formIsValid = false;
      errors["cedula"] = "*Por favor ingrese un numero de identificacion de un profesor";
    }

    if (typeof fields["cedula"] !== "undefined") {
      if (!fields["cedula"].match(/^[0-9]{4}$/)) {
        formIsValid = false;
        errors["cedula"] = "*Por favor ingrese numero identificacion valido.";
      }
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
          <h3>Registro Grupo</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
            <label className="center-label">Codigo del Curso:</label>
            <input type="text" className="custom-search-input" name="idCurso" value={this.state.fields.idCurso} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.idCurso}</div>
            <label className="center-label">N° identificacion profesor:</label>
            <input type="text" className="custom-search-input" name="cedula" value={this.state.fields.cedula} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.cedula}</div>
            <label className="center-label" >Numero del Grupo:</label>
            <input type="text" name="numeroGrupo" className="custom-search-input" value={this.state.fields.numeroGrupo} onChange={this.handleChange} />
            <label className="center-label">Modalidad:</label>
            <select name="modalidad" className="custom-search-input"  style={{ height: "40px" }} value={this.state.fields.modalidad} onChange={this.handleChange}>
              <option value="Pregrado">Presencial</option>
              <option value="Postgrado">Virtual</option>
            </select>
            <div style={{ marginBottom: "20px" }}></div>
            <label className="center-label">Días de Clases:</label>
            <div className="custom-search-input" style={{ display: "flex" }}>
             <label> <input type="checkbox" name="lunes" value="Lunes" /> Lunes </label>
              <label> <input type="checkbox" name="martes" value="Martes" /> Martes </label>
              <label> <input type="checkbox" name="miercoles" value="Miércoles" /> Miércoles </label>
              <label> <input type="checkbox" name="jueves" value="Jueves" /> Jueves </label>
              <label> <input type="checkbox" name="viernes" value="Viernes" /> Viernes</label>
              <label> <input type="checkbox" name="sabado" value="Sábado" /> Sábado </label>
              <label> <input type="checkbox" name="domingo" value="Domingo" /> Domingo </label>
            </div>
            <div className="custom-search-input" style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <label className="center-label">Hora de inicio:</label>
                <select name="horaInicio" style={{ height: "40px",  width: "50px" ,marginLeft: "-40px"}} value={this.state.fields.horaInicio} onChange={this.handleChange}>
                  <option value="horaInicio">6</option>
                  <option value="horaInicio">7</option>
                  <option value="horaInicio">8</option>
                  <option value="horaInicio">9</option>
                  <option value="horaInicio">10</option>
                  <option value="horaInicio">11</option>
                  <option value="horaInicio">12</option>
                  <option value="horaInicio">13</option>
                  <option value="horaInicio">14</option>
                  <option value="horaInicio">15</option>
                  <option value="horaInicio">16</option>
                  <option value="horaInicio">17</option>
                  <option value="horaInicio">18</option>
                  <option value="horaInicio">19</option>
                  <option value="horaInicio">20</option>
                </select>
              </div>
              <div>
                <label className="center-label">Hora de Finalización:</label>
                <select name="horaFinal" style={{ height: "40px", width: "50px", marginLeft: "-80px"}} value={this.state.fields.horaFinal} onChange={this.handleChange}>
                  <option value="horaInicio">8</option>
                  <option value="horaInicio">9</option>
                  <option value="horaInicio">10</option>
                  <option value="horaInicio">11</option>
                  <option value="horaInicio">12</option>
                  <option value="horaInicio">13</option>
                  <option value="horaInicio">14</option>
                  <option value="horaInicio">15</option>
                  <option value="horaInicio">16</option>
                  <option value="horaInicio">17</option>
                  <option value="horaInicio">18</option>
                  <option value="horaInicio">19</option>
                  <option value="horaInicio">20</option>
                  <option value="horaInicio">21</option>
                  <option value="horaInicio">22</option>
                </select>
              </div>
            </div>
            <label className="center-label">Semestre:</label>
            <input type="text" name="semestre" className="custom-search-input" value={this.state.fields.semestre} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.semestre}</div>
            <input type="submit" className="button" value="Guardar" />
          </form>
        </div>
      </div>
    );
  }


}

export default RegistroGrupo;