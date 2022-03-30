import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:"http://localhost:65468/adminAdmin/";

  constructor(private http:HttpClient) { }

  getPendingFormRequests():Observable<any>{
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.get<any>(url + "get_pending_form_requests");
  }

  deleteJoiningForm(id:any) {debugger
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.delete<any>(url + "delete_joining-form/{id}");
  }

  getDeleteRequest():Observable<any>{
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.get<any>(url + "get_deleteted_joining-form")
  }
}
