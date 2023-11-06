import axios from "axios";

const Grupo_API_BASE_URL = "//localhost:3306/registro_ac";

export const guardarProfesor = async (data, successCallback, errorCallback) => {
    const options = {
      method: "POST",
      url: `${Grupo_API_BASE_URL}/teacher/`,
      headers: { "Content-type": "application/json" },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };