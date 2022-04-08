import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../progress-bar.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  isLoading: Subject<boolean> = this.progressBarServ.isLoading;

  constructor(private progressBarServ: ProgressBarService) { }

  ngOnInit(): void {
  }

}
