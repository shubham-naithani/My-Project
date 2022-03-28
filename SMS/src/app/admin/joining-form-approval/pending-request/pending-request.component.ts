import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/dialog.service';
import { AdminService } from '../../admin.service';

export interface PeriodicElement {
  position: number;
  name: string;
  Email:string;
  Nationality:string;
  MaritialStatus:string;
  Qualification:string;
  SubjectsYouCanTeach:string;
  ExperienceOfTeaching:string;
  ClassesYouWillTeach:string;
  YourPeriods:string
  Approved:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, 
    name: '',
    Email:'',
    Nationality:'',
    MaritialStatus:'',
    Qualification:'',
    SubjectsYouCanTeach:'',
    ExperienceOfTeaching:'',
    ClassesYouWillTeach:'',
    YourPeriods:'',
    Approved:''
  },
];

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent implements OnInit {
  data:any
  displayedColumns: string[] = [
    'position', 
    'name', 
    'Email', 
    'Nationality',
    'MaritialStatus',
    'Qualification',
    'SubjectsYouCanTeach',
    'ExperienceOfTeaching',
    'ClassesYouWillTeach',
    'YourPeriods',
    'Approved'
  ];
  dataSource = ELEMENT_DATA;

  constructor
  (
    private adminservice:AdminService,
    private snackBar:MatSnackBar,
    private dialogService:DialogService
  ) 
  {
    this.getPendingRequests()
  }

  ngOnInit(): void {
  }

  getPendingRequests(){
    this.adminservice.teacherGet().subscribe((Response:any)=>{
      if (Response.statusCode == 200) {
        this.snackBar.open(Response.message)
        this.dataSource = Response.responseData;
      } else {
        this.snackBar.open(Response.message)
      }
      console.log(this.dataSource)
    });
  }

  openApprovedDialog() {
    this.dialogService.openApprovedDialog()
  }
}
