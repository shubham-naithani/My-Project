import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {


  constructor(private route:Router) { }
  // Role:"teacher";

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("/Login");
  }

}
