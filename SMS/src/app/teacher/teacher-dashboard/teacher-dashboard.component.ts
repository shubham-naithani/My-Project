import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  userName: any
  logoutDialogMessage = 'showLogOutDialog';
  rejectedFormMsg: string;
  progressBar: boolean = false
  constructor(
    private route: Router,
    private dialogService: DialogService,
    private adminSer: AdminService,
    private snackBar: MatSnackBar

  ) { }
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName')
    // this.adminSer.rejectedFormMsgSubject.subscribe(data => {
    //   if (data == 'Your joining form is rejected') {
    //     this.rejectedFormMsg = data
    //     this.snackBar.open(this.rejectedFormMsg , 'Dismiss' ,{
    //       duration:3000,
    //       horizontalPosition:'end'
    //     })
    //   }   
    // })
  }

  sendMessage(logoutDialogMessage: any) {
    this.adminSer.receiveLogoutMessage(logoutDialogMessage)
  }

  logout() {
    this.sendMessage(this.logoutDialogMessage)
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.progressBar = true
          localStorage.clear();
          this.route.navigateByUrl('/Login')
        }
        this.progressBar = false
      })
  }
}
