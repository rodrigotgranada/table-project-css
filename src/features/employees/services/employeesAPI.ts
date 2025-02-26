import axios from 'axios';
import { Employee } from '../types/employee';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>('/employees');
  return response.data;
};

export const getEmployee = async (id: number): Promise<Employee> => {
  const response = await api.get<Employee>(`/employees/${id}`);
  return response.data;
};

export default {
  getEmployees,
  getEmployee,
};
