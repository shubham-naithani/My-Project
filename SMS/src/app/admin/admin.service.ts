import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:"http://localhost:65468/adminAdmin/";

  constructor(private http:HttpClient) { }

  getPendingFormRequests():Observable<any> {
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.get<any>(url + "get_pending_form_requests");
  }

  getDeleteRequest():Observable<any> {
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.get<any>(url + "get_deleteted_joining-form")
  }

  getApprovedRequests():Observable<any> {
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.get<any>(url + "get_approved_requests")
  }

  postPendingForm(Data : any) :Observable<any> {
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.post<any>(url + "post_approved_requests" ,Data)
  }

  deleteJoiningForm(id : any):Observable<any> {
    let url = 'http://localhost:65468/adminAdmin/'
    return this.http.delete<any>(url + "delete_joining-form/{id}");
  }


}
