import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from 'src/app/shared/logout-dialog/logout-dialog.component';

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
      height: '180px',
      disableClose: true,
      panelClass: 'confirm-dialog-container'
    })
  }
}
