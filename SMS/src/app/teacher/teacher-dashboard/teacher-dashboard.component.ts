import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
userName:any
  constructor(
    private route:Router,
    private dialogService: DialogService
    ) { }
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName')
  }

  logout() {
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          localStorage.clear();
          this.route.navigateByUrl('/Login')
        }
      })
  }
}
