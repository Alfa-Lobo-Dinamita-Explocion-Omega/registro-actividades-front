import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/styles.css';
import imagenfondo from '../../assets/login.png';
import { login } from '../../services/RegistroServices';


const Inicio = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!email || !validateEmail(email)) {
      setEmailError('Por favor, introduce un correo válido.');
      return;
    }

    if (!password) {
      setPasswordError('Por favor, introduce tu contraseña.');
      return;
    }

    login({ email, password }, 
      (response) => {
        localStorage.setItem('jWttoken', response.data.jWttoken);
        navigate('/RegistroActividades');
      }, 
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className="Auth-form-container" style={{backgroundImage: `url(${imagenfondo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Correo electronico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div style={{color: 'red'}}>{emailError}</div>}
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inicio;