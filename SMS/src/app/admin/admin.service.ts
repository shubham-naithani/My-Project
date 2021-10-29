import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:"http://localhost:65468/adminAdmin/";

  constructor(private http:HttpClient) { }

  //--------------------------------------      ADMIN      ---------------------------------------

  teacherGet():Observable<any>{
    return this.http.get<any>(this.baseURL + "get_Teacher");
  }


  //---------------------------------------     STUDENT    ---------------------------------------

  getstudent(data:any): Observable<any>{
    return this.http.get<any>(this.baseURL + "get_students",data);
  }
  editstudent(data:any):Observable<any>{
    return this.http.post<any>(this.baseURL + "edit_students",data);
  }
  deletestudent(data:any):Observable<any>{
    return this.http.delete<any>(this.baseURL + "delete_student/{id}",data);
  }

  //---------------------------------------     TEACHER    ---------------------------------------

  // getteacher(data:any):Observable<any>{
  //   return this.http.get<any>(this.baseURL + "get_Teacher",data);
  // }
  editteacher(data:any):Observable<any>{
    return this.http.post<any>(this.baseURL + "edit-teachers",data);
  }
  deleteteacher(data:any):Observable<any>{
    return this.http.delete<any>(this.baseURL + "delete_teacher/{id}",data);
  }
}
