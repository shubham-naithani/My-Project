import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseURL="http://localhost:65468/studentStudent/";
  constructor(private http:HttpClient) { }

  
  Admission(data:any): Observable<any>{
    return this.http.post<any>(this.baseURL + "Admission_form",data);
  }

}
