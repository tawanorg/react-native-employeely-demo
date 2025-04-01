import { EmployeeType } from "../types";

export const getEmployeeType = (type: EmployeeType) => {
    switch (type) {
      case EmployeeType.FULL_TIME:
        return 'Full Time';
      case EmployeeType.PART_TIME:
        return 'Part Time';
      case EmployeeType.CONTRACTOR:
        return 'Contractor';
      default:
        return type;
    }
  }