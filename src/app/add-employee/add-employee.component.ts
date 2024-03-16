import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee : employee={
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    nationalId: '',
    maritalStatus: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    department: null,
    position: '',
    skillSet: '',
    employmentStartDate: '',
    employmentEndDate: null,
    salary: '',
    employmentStatus: '',
    bankAccountNumber: '',
    manager: null,
    role: null
  }

  constructor(private employeeService:EmployeeService){}

  addEmployee() : void{
    this.employeeService.createEmployee(this.employee).subscribe(()=>{
      console.log('Employee Added Successfully');
    });
  }

}
