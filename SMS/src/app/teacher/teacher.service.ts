import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseURL="http://localhost:65468/TeacherTeacherControler/Teacher_";
  constructor(private http:HttpClient) { }

  Joiningform(data:any): Observable<any>{
    return this.http.post<any>(this.baseURL + "joining_form",data);
  }
}
