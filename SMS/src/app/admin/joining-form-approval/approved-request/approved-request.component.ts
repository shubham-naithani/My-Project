import { Component, OnInit } from '@angular/core';

export interface ApprovedRequests {
  id: number;
  firstName: string;
  email:string;
  nationality:string;
  maritialStatus:string;
  qualification:string;
  subjectsYouCanTeach:string;
  experienceOfTeaching:string;
  ClassesYouWillTeach:string;
  YourPeriods:string;
  Approved:string;
}

let ELEMENT_DATA: ApprovedRequests[] = [
  {
    id: 0, 
    firstName: '',
    email:'',
    nationality:'',
    maritialStatus:'',
    qualification:'',
    subjectsYouCanTeach:'',
    experienceOfTeaching:'',
    ClassesYouWillTeach:'',
    YourPeriods:'',
    Approved:''
  },
];

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.css']
})
export class ApprovedRequestComponent implements OnInit {
  data:any
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

  constructor() { }

  ngOnInit(): void {
  }

}
