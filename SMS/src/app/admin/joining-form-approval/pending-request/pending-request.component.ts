import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/dialog.service';
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
  ClassesYouWillTeach: string;
  YourPeriods: string
  Approved: string
}let ELEMENT_DATA: PendingRequests[] = [
  {
    id: 0,
    firstName: '',
    email: '',
    nationality: '',
    maritialStatus: '',
    qualification: '',
    subjectsYouCanTeach: '',
    experienceOfTeaching: '',
    ClassesYouWillTeach: '',
    YourPeriods: '',
    Approved: ''
  },
];

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent implements OnInit {
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
    'ClassesYouWillTeach',
    'YourPeriods',
    'Approved'
  ];
  dataSource = [];

  constructor
    (
      private adminservice: AdminService,
      private snackBar: MatSnackBar,
      private dialogService: DialogService
    ) {
    this.getPendingRequests();
  }

  ngOnInit(): void {
  }
  
  openApprovedDialog() {
    this.dialogService.openApprovedDialog()
  }

  getPendingRequests() {
    this.adminservice.getPendingFormRequests().subscribe((res: any) => {
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

  deleteRequest(id: any) {
    this.adminservice.deleteJoiningForm(id).subscribe((res: any) => {
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
    })
  }

}
