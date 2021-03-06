import axios from 'axios';

const callAPI = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    'Content-Type': 'application/json',
  };

  const baseURL = 'http://localhost:8000/api/v1';
  const fullURL = `${baseURL}${path}`;
  if (method === 'get' || method === 'delete') {
    return axios[method](fullURL, { headers });
  } else {
    return axios[method](fullURL, data, { headers });
  }
};

export default {
  createAccount: (form) => callAPI('post', '/users/', form),
  login: (form) => callAPI('post', '/users/token/', form),
  rooms: (page = 1) => {
    return callAPI('get', `/rooms/?page=${page}`);
  },
};
