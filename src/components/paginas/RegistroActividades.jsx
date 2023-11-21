import './styles/styles.css';
import { useNavigate } from 'react-router-dom';
import { getGrupos } from '../../services/RegistroServices';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";



const RegistroActividades = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {


    const fetchData = async () => {

      const token = localStorage.getItem('jWttoken');
      if (!token) {
        console.error('No se encontró el token');
        return;
      }

      let decoded = jwtDecode (token);

      const iddocument = decoded.id;
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      await getGrupos(iddocument, config, (response) => {
        setData(response.data); // Actualiza el estado con los datos obtenidos
      }, (error) => {
        console.error(error);
      });
    };

    fetchData();
  }, []); // Añade tus dependencias si las hay

  // El resto de tu código...

  const handleAddActivities = (id) => {
    localStorage.setItem('selectedId', id);
    Navigate(`/IngresarActividades/${id}`);
  }


    return (
      <div className="table-container">
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>N° GRUPO</th>
                      <th>HORAS TRABAJAS</th>
                      <th>MODALIDAD</th>
                      <th>HORARIO</th>
                      <th>SEMESTRE</th>
                      <th>CODIGO CURSO</th>
                      <th>ACCIONES</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((item, index) => (
                      <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.groupNumber}</td>
                          <td>{item.hoursWorked}</td>
                          <td>{item.modality}</td>
                          <td>{item.schedule}</td>
                          <td>{item.semester}</td>
                          <td>{item.courseCode}</td>
                          <td><button onClick={() => handleAddActivities(item.id)} >Agregar actividades</button></td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default RegistroActividades;