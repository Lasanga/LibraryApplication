import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignerApprovalComponent } from './foreigner-approval.component';

describe('ForeignerApprovalComponent', () => {
  let component: ForeignerApprovalComponent;
  let fixture: ComponentFixture<ForeignerApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignerApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
