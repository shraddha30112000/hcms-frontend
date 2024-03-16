import { department } from "./department.model";
import { role } from "./role.model";

export interface employee{

    employeeId?:number;
    firstName:string; 
    lastName:string;
    gender:string;
    dateOfBirth:string;
    email:string;
    phone:string;
    address:string;
    nationalId:string;
    maritalStatus:string;
    emergencyContactName:string;
    emergencyContactPhone:string;
    department:department | null;
    position:string;
    skillSet:string;
    employmentStartDate:string;
    employmentEndDate:string | null;
    salary:string;
    employmentStatus:string;
    bankAccountNumber:string;
    manager:employee | null;
    role:role | null;

}