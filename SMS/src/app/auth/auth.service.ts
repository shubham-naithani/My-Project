import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  baseUrl= "http://localhost:65468/api/AccountControler/";
  constructor(private http:HttpClient) { }


  registeration(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + "Registeration",data);
   }
   verifyotp(data:any):Observable<any> {
    return this.http.post<any>(this.baseUrl + "VerifyOTP",data ); 
  }
  resendOTP(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + "ResendOTP",data);
  }
  login(data:any): Observable<any> {
    return this.http.post<any>( this.baseUrl + "Login",data);
   }
  forgetpassword(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + "Forget-password",data);
  }
  resetpassword(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + "Reset-password",data);
  }














}
