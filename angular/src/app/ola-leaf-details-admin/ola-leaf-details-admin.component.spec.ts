import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafDetailsAdminComponent } from './ola-leaf-details-admin.component';

describe('OlaLeafDetailsAdminComponent', () => {
  let component: OlaLeafDetailsAdminComponent;
  let fixture: ComponentFixture<OlaLeafDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
