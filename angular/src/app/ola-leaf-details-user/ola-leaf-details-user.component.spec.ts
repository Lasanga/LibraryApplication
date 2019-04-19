import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafDetailsUserComponent } from './ola-leaf-details-user.component';

describe('OlaLeafDetailsUserComponent', () => {
  let component: OlaLeafDetailsUserComponent;
  let fixture: ComponentFixture<OlaLeafDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
