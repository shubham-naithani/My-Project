import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean {
    if (localStorage.getItem("token")) {
      return true;
      
    }else 
    this.route.navigateByUrl("/Login");
    return true;
  }
  
}
