import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

export const routes: Routes = [
    {path:'employees',component: EmployeeListComponent},
    {path:'employee/:id',component: EmployeeDetailsComponent},
    {path:'add-employee',component: AddEmployeeComponent},
    {path:'edit-employee/:id',component: EditEmployeeComponent},
    {path:'',redirectTo:'/employees',pathMatch:'full'}
];
