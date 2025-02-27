import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
});


export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>("/employees");
  return response.data;
};

export const getEmployee = async (id: number): Promise<Employee> => {
  const response = await api.get<Employee>(`/employees/${id}`);
  return response.data;
};

const employeesAPI = {
  getEmployees,
  getEmployee,
};

export default employeesAPI;