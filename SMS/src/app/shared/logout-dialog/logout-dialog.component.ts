import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class LogoutDialogComponent implements OnInit {
  userName:any

  constructor
    (
      public dialogRef: MatDialogRef<LogoutDialogComponent>
    ) { }

  ngOnInit(): void {
   this.userName = localStorage.getItem('userName')
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
