import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/dialog.service';
import { LogoutDialogComponent } from 'src/app/shared/logout-dialog/logout-dialog.component';
import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';
import { AdminService } from '../../admin.service';

export interface PendingRequests {
  id: number;
  firstName: string;
  email: string;
  nationality: string;
  maritialStatus: string;
  qualification: string;
  subjectsYouCanTeach: string;
  experienceOfTeaching: string;
  Approved: string
}
let ELEMENT_DATA: PendingRequests[] = [
  {
    id: 0,
    firstName: '',
    email: '',
    nationality: '',
    maritialStatus: '',
    qualification: '',
    subjectsYouCanTeach: '',
    experienceOfTeaching: '',
    Approved: ''
  },
];

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent implements OnInit {
  @ViewChild(SideBarComponent) sideBarCom: SideBarComponent
  deleteDialogMessage = 'showDeleteDialog'
  rejectedMessage = 'Your joining form has been rejected';
  formsCount: any;
  hidden = true;
  count = 0;
  data: any
  id: any;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'nationality',
    'maritialStatus',
    'qualification',
    'subjectsYouCanTeach',
    'experienceOfTeaching',
    'Approved'
  ];
  dataSource = [];

  constructor
    (
      private snackBar: MatSnackBar,
      private dialogService: DialogService,
      private adminSer: AdminService
    ) {
    this.getPendingRequests();
  }

  ngOnInit(){ 
    this.formsCount = localStorage.getItem('formsCount')
  }

  openApprovedDialog() {
    this.dialogService.openApprovedDialog()
  }

  getPendingRequests() {
    this.adminSer.getPendingFormRequests().subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.snackBar.open(res.message, 'undo', {
          duration: 3000
        })
        this.dataSource = res.responseData;
      } else {
        this.snackBar.open(res.message, 'undo', {
          duration: 3000
        })
      }
    });
  }

  sendMessage(deleteDialogMessage: any) {
    this.adminSer.receiveDeleteMessage(deleteDialogMessage)
  }

  sendRejFormMsg(rejectedMessage:any) {
    this.adminSer.sendFormRejMsg(rejectedMessage)
  }

  deleteRequest(id: any) {debugger
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      this.sendMessage(this.deleteDialogMessage)
      if (res) {
        this.adminSer.deleteJoiningForm(id).subscribe((res: any) => {
          if (res.statusCode == 200) {
            this.snackBar.open(res.message, 'undo', {
              duration: 3000
            })
            this.sendRejFormMsg(this.rejectedMessage)
            this.getPendingRequests();
            this.adminSer.getPendingFormRequests().subscribe((res: any) => {
              if (res.responseData != null) {
                let length = res.responseData.length
                localStorage.setItem('formsCount', length)
                this.formsCount = localStorage.getItem('formsCount')
                if (this.count >= 1) {
                  this.hidden = true
                }
                this.count = this.count + 1
              } else {
                this.hidden = true
              }
            })
          } else {
            this.snackBar.open(res.message, 'undo', {
              duration: 3000
            })
          }
        })
      }
    })
  }
}
