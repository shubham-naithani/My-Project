import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin.service';

export interface RejectedRequests {
  id: number;
  firstName: string;
  email: string;
  nationality: string;
  maritialStatus: string;
  qualification: string;
  subjectsYouCanTeach: string;
  experienceOfTeaching: string;
  Canceled: string
}

let ELEMENT_DATA: RejectedRequests[] = [
  {
    id: 0,
    firstName: '',
    email: '',
    nationality: '',
    maritialStatus: '',
    qualification: '',
    subjectsYouCanTeach: '',
    experienceOfTeaching: '',
    Canceled:''
  },
];

@Component({
  selector: 'app-rejected-request',
  templateUrl: './rejected-request.component.html',
  styleUrls: ['./rejected-request.component.css']
})
export class RejectedRequestComponent implements OnInit {
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
    'Canceled'
  ];
  dataSource = [];

  constructor
    (
      private adminservice: AdminService,
      private snackBar: MatSnackBar,
    ) 
  {
    this.getDeleteRequests();
  }

  ngOnInit(): void {
  }

  getDeleteRequests() {
    this.adminservice.getDeleteRequest().subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.snackBar.open(res.message,'undo',{
          duration:3000
        })
        this.dataSource = res.responseData;
      } else {
        this.snackBar.open(res.message,'undo',{
          duration:3000
        })
      }
    })
  }

}
