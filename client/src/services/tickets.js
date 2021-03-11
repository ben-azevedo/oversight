import api from './api-config';

export const getAllTickets = async () => {
  const resp = await api.get('/tickets');
  return resp.data;
}

export const getOneTicket = async (id) => {
  const resp = await api.get(`/tickets/${id}`);
  return resp.data;
}

export const postTicket = async (ticketData) => {
  const resp = await api.post('/tickets', { ticket: ticketData });
  return resp.data;
}

export const putTicket = async (id, ticketData) => {
  const resp = await api.put(`/tickets/${id}`, { ticket: ticketData });
  return resp.data;
}

export const destroyTicket = async (id) => {
  const resp = await api.delete(`/tickets/${id}`);
  return resp;
}