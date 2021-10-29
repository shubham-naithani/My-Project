import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  timeTable: any[] = [
    { Days:"Mon" , subject: 'hindi', class: "10", period: 2 ,FreePeriods:"N/A" },
    { Days:"Tue" , subject: 'hindi', class: "8", period: 3 ,FreePeriods:"8"},
    { Days:"Wed" , subject: 'english', class: "9", period: 3 ,FreePeriods:"8"},
    { Days:"Thr" , subject: 'hindi', class: "9", period: 4 ,FreePeriods:"N/A"},
    { Days:"Fri" , subject: 'english', class: "8", period: 3 ,FreePeriods:"8"},
    { Days:"Sat" , subject: 'hindi', class: "9", period: 2 ,FreePeriods:"8"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
