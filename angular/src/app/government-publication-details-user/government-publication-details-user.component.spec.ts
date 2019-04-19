import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationDetailsUserComponent } from './government-publication-details-user.component';

describe('GovernmentPublicationDetailsUserComponent', () => {
  let component: GovernmentPublicationDetailsUserComponent;
  let fixture: ComponentFixture<GovernmentPublicationDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
