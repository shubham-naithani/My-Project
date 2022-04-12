import { Component, OnInit, Inject, inject, ViewChild, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { PendingRequestComponent } from 'src/app/admin/joining-form-approval/pending-request/pending-request.component';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class LogoutDialogComponent implements OnInit, OnDestroy {
  @ViewChild(PendingRequestComponent) pendingReqCom: (PendingRequestComponent)
  userName: any;
  deleteDialogMessage: string
  logoutDialogMessage: string
  deleteSub: Subscription
  logoutSub: Subscription

  constructor
    (
      public adminSer: AdminService,
      public dialogRef: MatDialogRef<LogoutDialogComponent>
    ) {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName')
    this.adminSer.logoutDialogMessageSubject.subscribe(data => {
      if (data === 'showLogOutDialog') {
        this.logoutDialogMessage = data
      } else {
        this.adminSer.DeleteDialogMessageSubject.subscribe(data => {
          if (data === 'showDeleteDialog') {
            this.deleteDialogMessage = data
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.adminSer.logoutDialogMessageSubject.next('')
  }


  closeDialog() {
    this.dialogRef.close(false);
  }
}
