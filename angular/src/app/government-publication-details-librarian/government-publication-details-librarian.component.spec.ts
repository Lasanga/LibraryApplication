import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationDetailsLibrarianComponent } from './government-publication-details-librarian.component';

describe('GovernmentPublicationDetailsLibrarianComponent', () => {
  let component: GovernmentPublicationDetailsLibrarianComponent;
  let fixture: ComponentFixture<GovernmentPublicationDetailsLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationDetailsLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationDetailsLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
