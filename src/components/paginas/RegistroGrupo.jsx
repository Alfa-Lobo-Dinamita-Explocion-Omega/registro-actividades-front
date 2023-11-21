import React from 'react';
import './styles/styles.css';
import { guardarGrupo } from '../../services/RegistroServices';

class RegistroGrupo extends React.Component {
  constructor() {
    super();
    this.state = {
      dia: [],
      fields: { 
      courseCode: '',
      groupNumber: '',
      teacherIdDocument: '',
      modality: '',
      schedule: '',
      semester: '',
    },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleCheckboxChange = (event) => {
    const { dia  } = this.state;
    if (event.target.checked) {
      dia.push(event.target.value);
    } else {
      const index = dia.indexOf(event.target.value);
      if (index > -1) {
        dia.splice(index, 1);
      }
    }
    this.setState({ dia });
  }

  handleChange(e) {
    const { name, value } = e.target;
  
   this.setState((prevState) => {
      let fields = prevState.fields;
      let dia=prevState.dia.join('');
      if (name === 'horaInicio' || name === 'horaFinal') {
        let horas = fields.schedule ? fields.schedule.split(' ') : [dia, ' '];
        if (name === 'horaInicio') {
          horas[1] = value + (horas[1].split('-')[1] ? '-' + horas[1].split('-')[1] : '');
        } else {
          horas[1] = (horas[1].split('-')[0] || '') + '-' + value;
        }
        fields.schedule = horas.join(' ');
      } else {
        fields[name] = value;
      }
      return { fields };
    });
  }

  async submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const userData = this.state.fields;
      console.log('Datos del formulario:', userData);
      const token = localStorage.getItem('jWttoken');
      if (!token) {
        console.error('No se encontró el token');
        return;
      }
  
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      await guardarGrupo(
        userData,
        config,
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
          courseCode: '',
          groupNumber: '',
          teacherIdDocument: '',
          modality: '',
          schedule: '',
          semester: '',
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

  
    if (!fields["groupNumber"]) {
      formIsValid = false;
      errors["groupNumber"] = "*Por favor ingrese un codigo del curso";
    }

    if (typeof fields["teacherIdDocument"] !== "undefined") {
      if (!fields["teacherIdDocument"].match(/^[0-9]{4,12}$/)) {
        formIsValid = false;
        errors["teacherIdDocument"] = "*Por favor ingrese un numero valido de un profesor que se encuentre registrado.";
      }
    }

    if (!fields["modality"]) {
      formIsValid = false;
      errors["modality"] = "*Por favor seleccione una modalidad.";
    }


    if (!fields["semester"]) {
      formIsValid = false;
      errors["semester"] = "*Por favor ingrese un semestre.";
    } else {
      const semesterFormat = /^\d{4}-[1-2]$/;
    
      if (!semesterFormat.test(fields["semester"])) {
        formIsValid = false;
        errors["semester"] = "*Por favor ingrese un semestre válido. Ejemplo: 2023-1";
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
            <input type="text" className="custom-search-input" name="courseCode" value={this.state.fields.courseCode} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.courseCode}</div>
            <label className="center-label">N° identificacion profesor:</label>
            <input type="text" className="custom-search-input" name="teacherIdDocument" value={this.state.fields.teacherIdDocument} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.teacherIdDocument}</div>
            <label className="center-label" >Numero del Grupo:</label>
            <input type="text" name="groupNumber" className="custom-search-input" value={this.state.fields.groupNumber} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.groupNumber}</div>
            <label className="center-label">Modalidad:</label>
            <select name="modality" className="custom-search-input"  style={{ height: "40px" }} value={this.state.fields.modality} onChange={this.handleChange}>
             <option value="">SELECIONE</option>
              <option value="PRESENCIAL">PRESENCIAL</option>
              <option value="VIRTUAL">VIRTUAL</option>
            </select>
            <div className="errorMsg">{this.state.errors.modality}</div>
            <div style={{ marginBottom: "20px" }}></div>
            <label className="center-label">Días de Clases:</label>
            <div className="custom-search-input" style={{ display: "flex" }}>
              <label> <input type="checkbox" value="L" onChange={this.handleCheckboxChange} /> Lunes </label>
              <label> <input type="checkbox" value="M" onChange={this.handleCheckboxChange} /> Martes </label>
              <label> <input type="checkbox" value="W" onChange={this.handleCheckboxChange} /> Miércoles </label>
              <label> <input type="checkbox" value="J" onChange={this.handleCheckboxChange} /> Jueves </label>
              <label> <input type="checkbox" value="V" onChange={this.handleCheckboxChange} /> Viernes</label>
              <label> <input type="checkbox" value="S" onChange={this.handleCheckboxChange} /> Sábado </label>
              <label> <input type="checkbox" value="D" onChange={this.handleCheckboxChange} /> Domingo </label>
            </div>
            <div className="custom-search-input" style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <label className="center-label">Hora de inicio:</label>
                <select name="horaInicio" style={{ height: "40px",  width: "50px" ,marginLeft: "-40px"}} value={this.state.fields.horaInicio} onChange={this.handleChange}>
                <option value="--">----</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div>
                <label className="center-label">Hora de Finalización:</label>
                <select name="horaFinal" style={{ height: "40px", width: "50px", marginLeft: "-80px"}} value={this.state.fields.horaFinal} onChange={this.handleChange}>
                <option value="--">-----</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                </select>
              </div>
            </div>
            <label className="center-label">Semestre:</label>
            <input type="text" name="semester" className="custom-search-input" value={this.state.fields.semester} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.semester}</div>
            <input type="submit" className="button" value="Guardar" />
          </form>
        </div>
      </div>
    );
  }


}

export default RegistroGrupo;