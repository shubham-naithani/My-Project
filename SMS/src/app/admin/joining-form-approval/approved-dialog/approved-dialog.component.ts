import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/dialog.service';
import { AdminService } from '../../admin.service';
import { PendingRequestComponent } from '../pending-request/pending-request.component';

interface selectClass {
  value: string;
}

interface selectPeriod {
  value: string;
}
@Component({
  selector: 'app-approved-dialog',
  templateUrl: './approved-dialog.component.html',
  styleUrls: ['./approved-dialog.component.css']
})
export class ApprovedDialogComponent implements OnInit {
  @ViewChild(PendingRequestComponent) pendingCom: PendingRequestComponent
  approvedForm: FormGroup;
  approvedMessage: 'You are approved';
  progressBar: boolean = false
  classes: selectClass[] = [
    { value: 'Class 1' },
    { value: 'Class 2' },
    { value: 'Class 3' },
    { value: 'Class 4' },
    { value: 'Class 5' },
    { value: 'Class 6' },
    { value: 'Class 7' },
    { value: 'Class 8' },
    { value: 'Class 9' },
    { value: 'Class 10' },
    { value: 'Class 11' },
    { value: 'Class 12' },
  ];

  periods: selectPeriod[] = [
    { value: 'Period 1' },
    { value: 'Period 2' },
    { value: 'Period 3' },
    { value: 'Period 4' },
    { value: 'Period 5' },
    { value: 'Period 6' },
    { value: 'Period 7' },
    { value: 'Period 8' },
  ];
  constructor
    (
      private fb: FormBuilder,
      private adminservice: AdminService,
      private snackBar: MatSnackBar,
      private dialogSer: DialogService,
      private dialog: MatDialog,

  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.approvedForm = this.fb.group({
      ClassesYouWillTeach: ['',
        [Validators.required]
      ],
      YourPeriods: ['',
        [Validators.required]
      ]
    })
  }

  get ClassesYouWillTeach(): AbstractControl {
    return this.approvedForm.get('ClassesYouWillTeach') as FormControl;
  }
  get YourPeriods(): AbstractControl {
    return this.approvedForm.get('YourPeriods') as FormControl;
  }


  onSubmit() {
    debugger
    this.approvedForm.markAllAsTouched();
    let Data = {
      ClassesYouWillTeach: this.approvedForm.value.ClassesYouWillTeach.join(),
      YourPeriods: this.approvedForm.value.YourPeriods.join()
    }
    if (Data != null) {
      this.progressBar = true
      this.adminservice.postPendingForm(Data).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.snackBar.open(res.message, 'undo', {
            duration: 3000
          })
          this.dialog.closeAll();
        } else {
          this.snackBar.open(res.message, 'undo', {
            duration: 3000
          })
        }
        this.progressBar = false
      });
    }
  }
}
