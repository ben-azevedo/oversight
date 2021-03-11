import api from './api-config';

export const getAllProjects = async () => {
  const resp = await api.get('/projects');
  return resp.data;
}

export const getOneProject = async (id) => {
  const resp = await api.get(`/projects/${id}`);
  return resp.data;
}