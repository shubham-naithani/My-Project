import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
   role: any;
   userName:any
  constructor(
    private route:Router,
    private dialogSer:DialogService
    ) { }

  ngOnInit(): void {
   this.role = localStorage.getItem('userRole')
   this.userName = localStorage.getItem('userName')
  } 

}
