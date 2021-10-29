import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route:Router) { }
  // Role:"admin";
  ngOnInit(): void {
    this.getAdmin();
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("/Login");
  }

  getAdmin(){
    // this.role=res.responseData.role;
  }

}
