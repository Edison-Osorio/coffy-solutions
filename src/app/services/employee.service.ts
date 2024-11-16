import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateEmployee } from '../modules/home/components/recolectors/models/create-employee.dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = environment.apiUrl;

  private readonly http: HttpClient = inject(HttpClient);

  getEmployees(startDate: string) {
    const formattedDate = new Date(startDate).toISOString().split('T')[0];
    console.log(formattedDate);

    return this.http.get<any[]>(`${this.apiUrl}/employee/get-employees/${formattedDate}`);
  }

  createEmployee(employee: CreateEmployee) {
    return this.http.post<any>(`${this.apiUrl}/employee/create-employee`, employee);
  }
}
