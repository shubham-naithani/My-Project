import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
userName:any
logoutDialogMessage = 'showLogOutDialog';
  constructor(
    private route:Router,
    private dialogService: DialogService,
    private adminservice:AdminService

    ) { }
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName')
  }

  sendMessage(logoutDialogMessage:any) {
    this.adminservice.receiveLogoutMessage(logoutDialogMessage)
  }

  logout() {
    this.sendMessage(this.logoutDialogMessage)
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          localStorage.clear();
          this.route.navigateByUrl('/Login')
        }
      })
  }
}
