import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
 
  Role: any;
  constructor(private route:Router) { }

  ngOnInit(): void {debugger
   this.Role =  localStorage.getItem('Role');
  } 
}
