interface EmployeeContextType {
  employees: Employee[];
  loading: boolean;
  error: string | null;
  refreshEmployees: () => void;
}
