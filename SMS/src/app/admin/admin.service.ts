import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  DeleteDialogMessageSubject = new BehaviorSubject<any>('');
  logoutDialogMessageSubject = new BehaviorSubject<any>('');

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

  receiveDeleteMessage(deleteDialogMessage: any) {
    this.DeleteDialogMessageSubject.next(deleteDialogMessage)
  }

  receiveLogoutMessage(logoutDialogMessage: any) {
    this.logoutDialogMessageSubject.next(logoutDialogMessage)
  }
}
