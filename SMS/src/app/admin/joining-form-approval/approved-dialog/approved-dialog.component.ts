import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface class1 {
  value: string;
}

interface period {
  value: string;
}
@Component({
  selector: 'app-approved-dialog',
  templateUrl: './approved-dialog.component.html',
  styleUrls: ['./approved-dialog.component.css']
})
export class ApprovedDialogComponent implements OnInit {
  approvedForm: FormGroup
  classes: class1[] = [
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

  periods: period[] = [
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
      private fb: FormBuilder
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

  submit() {
    this.approvedForm.markAllAsTouched();
    if (this.approvedForm.valid) {
      console.log(this.approvedForm.value)
    }
  }
}
