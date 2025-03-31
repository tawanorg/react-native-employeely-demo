// use tanstack query
import axios from "axios";
import { Employee } from "../../types";
import { queryClient } from "../utils";

type GetEmployeesResponse = {
  employees: Employee[];
};

const getEmployeesApi = async (queryKey: string): Promise<GetEmployeesResponse> => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/employees.json`;
  const response = await axios.get<GetEmployeesResponse>(url);
  
  if (!response.data) {
    return {
      employees: [],
    }
  }

  queryClient.setQueryData([queryKey], response.data);
  return response.data;
};

const getEmployeeById = (queryKey: string, id: string) => {
  const result = queryClient.getQueryData<GetEmployeesResponse>([queryKey]);
  
  if (!result || !result?.employees) {
    return null;
  }

  const employee = result.employees.find((employee) => employee.uuid === id);

  if (!employee) {
    return null;
  }

  return employee;
}

export const employeeApi = {
  getEmployees: getEmployeesApi,
  getEmployeeById: getEmployeeById,
}