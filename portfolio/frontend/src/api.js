import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const getOverview = () => API.get('overview/');
export const getProfile = () => API.get('profile/');
export const getProjects = () => API.get('projects/');

export default API;
