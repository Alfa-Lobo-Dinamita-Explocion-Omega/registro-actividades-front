import React from 'react';
import './styles/styles.css';
import { getActividades } from '../../services/RegistroServices';
import { guardarActividad} from '../../services/RegistroServices';


class IngresarActividades extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
      time: '',
      typeActivity: '',
      errors: {},
      actividades: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const grupoId = localStorage.getItem('selectedId');

    const token = localStorage.getItem('jWttoken');
      if (!token) {
        console.error('No se encontró el token');
        return;
      }
  
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

    await getActividades(grupoId, config, (response) => {
      console.log(response.data)
      this.setState({ actividades: response.data }); 
    }, (error) => {
      console.error(error);
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  guardarActividad = (event) => {
    event.preventDefault();

    const { date, description, time, typeActivity } = this.state;
    let errors = {};

    if (!date) {
      errors.date = 'Por favor seleccione una fecha';
    }
    if (!description) {
      errors.description = 'Por favor ingrese una descripción';
    }
    if (!time) {
      errors.time = 'Por favor ingrese un tiempo';
    }
    if (!typeActivity) {
      errors.tipeActivity = 'Por favor seleccione un tipo de actividad';
    }

   
      const group = localStorage.getItem('selectedId')
      const actividad = { date, description, time, typeActivity, group};
      const token = localStorage.getItem('jWttoken');
      const config = {
      headers: { Authorization: `Bearer ${token}` } };
      console.log(actividad);

      guardarActividad(actividad, config, (response) => {
      console.log(response.data);
    }, (error) => {
      console.error(error);
    });
      this.setState(prevState => ({
        actividades: [...prevState.actividades, { date, description, time, typeActivity }],
        date: '',
        description: '',
        time: '',
        typeActivity: '',
        errors: {}
      }));
    
  }

  render() {
    const { errors, actividades } = this.state;

    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registro Actividad</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.guardarActividad} >
            <label className="center-label">Fecha:</label>
            <input type="date" className="custom-search-input"  name="date" value={this.state.date} onChange={this.handleInputChange} />
            {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
            <label className="center-label" >Descripción de la Actividad:</label>
            <input type="text" className="custom-search-input"  name="description" value={this.state.description} onChange={this.handleInputChange} />
            {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
            <label className="center-label">Tiempo:</label>
            <input type="number"  className="custom-search-input"  name="time" value={this.state.time} onChange={this.handleInputChange} />  
            {errors.time && <div style={{ color: 'red' }}>{errors.time}</div>}
            <label className="center-label">Tipo de actividad:</label>
            <select name="typeActivity"  style={{ height: "40px" }}  value={this.state.typeActivity}  onChange={this.handleInputChange}>
                <option value="">Selecciona un tipo</option>
                <option value="1">CLASE VIRTUAL</option>
                <option value="2">ASESORIA VIRTUAL</option>
                <option value="3">CLASE PRESENCIAL</option>
            </select>
            {errors.typeActivity && <div style={{ color: 'red' }}>{errors.typeActivity}</div>}
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
                  <td>{actividad.date}</td>
                  <td>{actividad.description}</td>
                  <td>{actividad.time}</td>
                  <td>{actividad.typeActivity}</td>
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
