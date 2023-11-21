import axios from "axios";

const Grupo_API_BASE_URL = "http://localhost:8080";

export const guardarProfesor = async (data,config, successCallback, errorCallback) => {
    const options = {
      method: "POST",
      url: `${Grupo_API_BASE_URL}/teachers`,
      headers: { "Content-type": "application/json",
      ...config.headers},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const guardarCurso = async (data, config, successCallback, errorCallback) => {
    const options = {
      method: "POST",
      url: `${Grupo_API_BASE_URL}/courses`,
      headers: { 
        "Content-type": "application/json",
        ...config.headers 
      },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const guardarGrupo = async (data, config,successCallback, errorCallback) => {
    const options = {
      method: "POST",
      url: `${Grupo_API_BASE_URL}/groups`,
      headers: { "Content-type": "application/json" ,
      ...config.headers },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const login = async (data,successCallback, errorCallback) => {
    const options = {
      method: "POST",
      url: `${Grupo_API_BASE_URL}/auth/login`,
      headers: { "Content-type": "application/json"},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const getGrupos = async (iddocument, config, successCallback, errorCallback) => {
    const options = {
      method: "GET",
      url: `${Grupo_API_BASE_URL}/groups/${iddocument}`,
      headers: { 
        "Content-type": "application/json",
        ...config.headers
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };