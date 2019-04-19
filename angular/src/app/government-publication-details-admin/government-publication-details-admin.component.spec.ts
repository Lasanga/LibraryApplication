import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationDetailsAdminComponent } from './government-publication-details-admin.component';

describe('GovernmentPublicationDetailsAdminComponent', () => {
  let component: GovernmentPublicationDetailsAdminComponent;
  let fixture: ComponentFixture<GovernmentPublicationDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
