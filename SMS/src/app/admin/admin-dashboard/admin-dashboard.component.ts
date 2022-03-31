import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/dialog.service';
import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(SideBarComponent) sideBarCom:SideBarComponent
  userName:any
  formsCount:any
  constructor
    (
      private route: Router,
      private dialogService: DialogService,
    ) 
    {

  }

  ngOnInit(): void {
   this.userName = localStorage.getItem('userName')
  }

  logout() {
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          localStorage.clear();
          this.route.navigateByUrl('/Login')
        }
      })
  }
}
