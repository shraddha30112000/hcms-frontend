import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/employees';
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<employee[]>{
    console.log('DATA ::::: ',this.http.get<employee[]>(this.apiUrl));
    return this.http.get<employee[]>(this.apiUrl);
  }

  getEmployeeById(id:number):Observable<employee[]>{
    return this.http.get<employee[]>(`${this.apiUrl}/${id}`);
  }

  createEmployee(data:employee):Observable<employee[]>{
    return this.http.post<employee[]>(this.apiUrl , data);
  }

  updateEmployeeById(id:number, data:employee ):Observable<employee[]>{
    return this.http.put<employee[]>(`${this.apiUrl}/${id}`,data);
  }

  deleteEmployeeById(id:number):Observable<employee[]>{
    return this.http.delete<employee[]>(`${this.apiUrl}/${id}`);
  }
}
