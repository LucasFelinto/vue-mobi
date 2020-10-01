import axios from 'axios';

const api = axios.create({
  baseURL: 'http://homologacao.sistemaeris.com.br:84/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
