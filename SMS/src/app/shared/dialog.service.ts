import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from 'src/app/shared/logout-dialog/logout-dialog.component';
import { ApprovedDialogComponent } from '../admin/joining-form-approval/approved-dialog/approved-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor
    (
      private dialog: MatDialog,
  ) { }

  openConfirmDialog() {
    return this.dialog.open(LogoutDialogComponent, {
      width: '350px',
      height: '190px',
      disableClose: true,
      panelClass: 'confirm-dialog-container'
    })
  }
 
  openApprovedDialog() {
    this.dialog.open(ApprovedDialogComponent,{
      width: '450px',
      height: '210px',
      disableClose: true,
    })
  }
}
