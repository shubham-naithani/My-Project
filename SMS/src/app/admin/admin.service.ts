import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:"http://localhost:65468/adminAdmin/";

  constructor(private http:HttpClient) { }

  teacherGet():Observable<any>{debugger
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.get<any>(url + "pending_form_requests");
  }
}
