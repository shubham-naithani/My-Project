import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  role: any;
  userName: any;
  hidden = true;
  formsCount: any;
  constructor(
    private route: Router,
    private dialogSer: DialogService,
    private adminSer: AdminService
  ) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('userRole')
    this.userName = localStorage.getItem('userName')
  }

  toggleBadgeVisibility() {    
    this.adminSer.getPendingFormRequests().subscribe((res: any) => {
      if (res.responseData != null) {
        this.hidden = false
        let length = res.responseData.length
        localStorage.setItem('formsCount', length)
        this.formsCount = localStorage.getItem('formsCount')
      } else {
        this.hidden = true
      }
    })
  }

}
