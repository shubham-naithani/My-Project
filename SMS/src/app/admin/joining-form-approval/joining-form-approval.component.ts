import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/shared/dialog.service';
import { AdminService } from '../admin.service';
import { ApprovedRequestComponent } from './approved-request/approved-request.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { RejectedRequestComponent } from './rejected-request/rejected-request.component';

@Component({
  selector: 'app-joining-form-approval',
  templateUrl: './joining-form-approval.component.html',
  styleUrls: ['./joining-form-approval.component.css']
})
export class JoiningFormApprovalComponent implements OnInit {
  @ViewChild(PendingRequestComponent) pendingCom: PendingRequestComponent
  @ViewChild(RejectedRequestComponent) rejectedCom: RejectedRequestComponent
  @ViewChild(ApprovedRequestComponent) approvedCom: ApprovedRequestComponent
  data: any;
  item: any;
  message: any;

  constructor(
    private fb: FormBuilder,
    private adminservice: AdminService,
    private route: Router,
    private toast: ToastrService,
    private snackBar: MatSnackBar,
    private dialog: DialogService
  ) {
  }

  ngOnInit() {
  }

  tabChanger(index: any) {
    if (index == 0) {
      this.pendingCom.getPendingRequests()
    }
    else if (index == 1) {
      this.approvedCom.getApprovedRequests()
    }
    else if (index == 2) {
      this.rejectedCom.getDeleteRequests()
    }
  }
}
