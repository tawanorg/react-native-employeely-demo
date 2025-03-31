export type EmployeeType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR';

export type Employee = {
    uuid: string,
    full_name: string,
    phone_number?: string,
    email_address: string,
    biography?: string,
    photo_url_small?: string,
    photo_url_large?: string,
    team?: string,
    employee_type: EmployeeType,
};

 