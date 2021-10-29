import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningFormApprovalComponent } from './joining-form-approval.component';

describe('JoiningFormApprovalComponent', () => {
  let component: JoiningFormApprovalComponent;
  let fixture: ComponentFixture<JoiningFormApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoiningFormApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningFormApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
