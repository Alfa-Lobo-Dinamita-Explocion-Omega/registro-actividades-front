import React from 'react';
import './styles/styles.css';
import { useNavigate } from 'react-router-dom';

const RegistroActividades = () => {
  const Navigate = useNavigate();

  const handleAddActivities = (id) => {
    // Aquí puedes guardar el ID donde prefieras, por ejemplo en el LocalStorage
    localStorage.setItem('selectedId', id);

    // Redirige a la página 'ingresaractividades'
    Navigate(`/IngresarActividades/${id}`);
  }

    const data = [

          {
            "id": 123,
            "group_number": 1,
            "hours_worked": 40,
            "modality": "online",
            "schedule": "LW 9:00-17:00",
            "semester": "2023-2",
            "course_code": "CS101",
            "teacher_id_number": 456
          },
          {
            "id": 124,
            "group_number": 2,
            "hours_worked": 30,
            "modality": "presencial",
            "schedule": "MJ 10:00-16:00",
            "semester": "2023-2",
            "course_code": "CS102",
            "teacher_id_number": 789
          },
          {
            "id": 125,
            "group_number": 3,
            "hours_worked": 35,
            "modality": "online",
            "schedule": "VS 11:00-18:00",
            "semester": "2023-2",
            "course_code": "CS103",
            "teacher_id_number": 456
          },
          {
            "id": 126,
            "group_number": 4,
            "hours_worked": 32,
            "modality": "presencial",
            "schedule": "LM 12:00-20:00",
            "semester": "2023-2",
            "course_code": "CS104",
            "teacher_id_number": 321
          }
        
        
    ];

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
                          <td>{item.group_number}</td>
                          <td>{item.hours_worked}</td>
                          <td>{item.modality}</td>
                          <td>{item.schedule}</td>
                          <td>{item.semester}</td>
                          <td>{item.course_code}</td>
                          <td><button onClick={() => handleAddActivities(item.id)} >Agregar actividades</button></td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default RegistroActividades;