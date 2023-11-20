import React from 'react';
import './styles/styles.css';

class IngresarActividades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      descripcion: '',
      tiempo: '',
      tipo: '',
      errors: {},
      actividades: []
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  guardarActividad = (event) => {
    event.preventDefault();

    const { fecha, descripcion, tiempo, tipo } = this.state;
    let errors = {};

    if (!fecha) {
      errors.fecha = 'Por favor seleccione una fecha';
    }
    if (!descripcion) {
      errors.descripcion = 'Por favor ingrese una descripción';
    }
    if (!tiempo) {
      errors.tiempo = 'Por favor ingrese un tiempo';
    }
    if (!tipo) {
      errors.tipo = 'Por favor seleccione un tipo de actividad';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState(prevState => ({
        actividades: [...prevState.actividades, { fecha, descripcion, tiempo, tipo }],
        fecha: '',
        descripcion: '',
        tiempo: '',
        tipo: '',
        errors: {}
      }));
    }
  }

  render() {
    const { errors, actividades } = this.state;

    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registro Actividad</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.guardarActividad} >
            <label className="center-label">Fecha:</label>
            <input type="datetime-local" className="custom-search-input"  name="fecha" value={this.state.fecha} onChange={this.handleInputChange} />
            {errors.fecha && <div style={{ color: 'red' }}>{errors.fecha}</div>}
            <label className="center-label" >Descripción de la Actividad:</label>
            <input type="text" className="custom-search-input"  name="descripcion" value={this.state.descripcion} onChange={this.handleInputChange} />
            {errors.descripcion && <div style={{ color: 'red' }}>{errors.descripcion}</div>}
            <label className="center-label">Tiempo:</label>
            <input type="number"  className="custom-search-input"  name="tiempo" value={this.state.tiempo} onChange={this.handleInputChange} />  
            {errors.tiempo && <div style={{ color: 'red' }}>{errors.tiempo}</div>}
            <label className="center-label">Tipo de actividad:</label>
            <select name="tipo"  style={{ height: "40px" }}  value={this.state.tipo}  onChange={this.handleInputChange}>
                <option value="">Selecciona un tipo</option>
                <option value="CLASE VIRTUAL">CLASE VIRTUAL</option>
                <option value="ASESORIA VIRTUAL">ASESORIA VIRTUAL</option>
                <option value="CLASE PRESENCIAL">CLASE PRESENCIAL</option>
            </select>
            {errors.tipo && <div style={{ color: 'red' }}>{errors.tipo}</div>}
            <div style={{ marginBottom: "20px" }}></div>
            <input type="submit" className="button" value="Guardar Actividad" />
          </form>
          
        </div>
        <div className="containers">
        <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Tiempo</th>
                <th>Tipo de actividad</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((actividad, index) => (
                <tr key={index}>
                  <td>{actividad.fecha}</td>
                  <td>{actividad.descripcion}</td>
                  <td>{actividad.tiempo}</td>
                  <td>{actividad.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div>
    );
  }
}

export default IngresarActividades;

  


    /*
  constructor(props) {
    super(props);
    this.state = {
      actividades: []
    };
  }

  agregarActividad = () => {
    this.setState(prevState => ({
      actividades: [...prevState.actividades, { fecha: '', descripcion: '', tiempo: '', tipo: '' }]
    }));
  }

  handleInputChange = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      const newActividades = [...prevState.actividades];
      newActividades[index][name] = value;
      return { actividades: newActividades };
    });
  }

  
    render() {
      return (
        <div className="containers">
          <button onClick={this.agregarActividad}>Agregar actividad</button>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Tiempo</th>
                <th>Tipo de actividad</th>
              </tr>
            </thead>
            <tbody>
              {this.state.actividades.map((actividad, index) => (
                <tr key={index}>
                  <td><input type="datetime-local" name="fecha" value={actividad.fecha} onChange={(event) => this.handleInputChange(event, index)} /></td>
                  <td><input type="text" className="descripcion" name="descripcion" value={actividad.descripcion} onChange={(event) => this.handleInputChange(event, index)} /></td>
                  <td><input type="number" className="tiempo" name="tiempo" value={actividad.tiempo} onChange={(event) => this.handleInputChange(event, index)} /></td>
                  <td>
                    <select name="tipo" value={actividad.tipo} onChange={(event) => this.handleInputChange(event, index)}>
                      <option value="">Selecciona un tipo</option>
                      <option value="CLASE VIRTUAL">CLASE VIRTUAL</option>
                      <option value="ASESORIA VIRTUAL">ASESORIA VIRTUAL</option>
                      <option value="CLASE PRESENCIAL">CLASE PRESENCIAL</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
      */