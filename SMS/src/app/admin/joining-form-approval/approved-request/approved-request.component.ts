import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  Email:string;
  Nationality:string;
  MaritialStatus:string;
  Qualification:string;
  SubjectsYouCanTeach:string;
  ExperienceOfTeaching:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, 
    name: '',
    Email:'shubham@gmail.com',
    Nationality:'',
    MaritialStatus:'',
    Qualification:'',
    SubjectsYouCanTeach:'',
    ExperienceOfTeaching:''
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
    'position', 
    'name', 
    'Email', 
    'Nationality',
    'MaritialStatus',
    'Qualification',
    'SubjectsYouCanTeach',
    'ExperienceOfTeaching'
  ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
