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
  count = 0;
  constructor
  (
    private adminSer: AdminService
  ) 
  {
    this.toggleBadgeVisibility();
  }
  
  ngOnInit(): void {
    this.role = localStorage.getItem('userRole')
    this.userName = localStorage.getItem('userName')
    this.formsCount = localStorage.getItem('formsCount')
  }

  toggleBadgeVisibility():any {
    this.hidden = false
    this.adminSer.getPendingFormRequests().subscribe((res: any) => {
      if (res.responseData != null) {
        let length = res.responseData.length
        localStorage.setItem('formsCount', length)
        this.formsCount = localStorage.getItem('formsCount')
        if (this.count >= 1) {
          this.hidden = true
        } 
        this.count = this.count  +1
        return res
      } else {
        this.hidden = true
      }
      return 0
    })
  }
}
