import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin.service';

export interface ApprovedRequests {
  id: number;
  firstName: string;
  email: string;
  nationality: string;
  maritialStatus: string;
  qualification: string;
  subjectsYouCanTeach: string;
  experienceOfTeaching: string;
  classesYouWillTeach: string;
  yourPeriods: string;
  Approved: string;
}

let ELEMENT_DATA: ApprovedRequests[] = [
  {
    id: 0,
    firstName: '',
    email: '',
    nationality: '',
    maritialStatus: '',
    qualification: '',
    subjectsYouCanTeach: '',
    experienceOfTeaching: '',
    classesYouWillTeach: '',
    yourPeriods: '',
    Approved: ''
  },
];

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.css']
})
export class ApprovedRequestComponent implements OnInit {
  data: any
  progressBar: boolean = false
  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'nationality',
    'maritialStatus',
    'qualification',
    'subjectsYouCanTeach',
    'experienceOfTeaching',
    'classesYouWillTeach',
    'yourPeriods',
    'Approved'
  ];
  dataSource = [];

  constructor
    (
      private adminservice: AdminService,
      private snackBar: MatSnackBar,
  ) {
    this.getApprovedRequests();
  }

  ngOnInit(): void {
  }

  getApprovedRequests() {
    this.progressBar = true
    this.adminservice.getApprovedRequests().subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.snackBar.open(res.message, 'undo', {
          duration: 3000
        })
        this.dataSource = res.responseData;
      } else {
        this.snackBar.open(res.message, 'undo', {
          duration: 3000
        })
        console.log('get rejected req')
      }
      this.progressBar = false
    })
  }
}
