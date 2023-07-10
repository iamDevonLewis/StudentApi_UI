import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'https://localhost:7042';
 

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    
    return this.httpClient.get<Student[]>(this.baseUrl + '/api/Student');
  }

  getStudent(id: string): Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl + '/api/Student/' + id)
  }

}
