import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component'

@NgModule({
  declarations: [
    SideBarComponent,
    TopBarComponent,
    LogoutDialogComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    SideBarComponent,
    TopBarComponent,
    ProgressBarComponent
  ]
})
export class SharedModule { }
