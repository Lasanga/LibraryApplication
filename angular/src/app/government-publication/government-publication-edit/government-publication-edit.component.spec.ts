import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationEditComponent } from './government-publication-edit.component';

describe('GovernmentPublicationEditComponent', () => {
  let component: GovernmentPublicationEditComponent;
  let fixture: ComponentFixture<GovernmentPublicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
