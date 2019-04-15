import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationComponent } from './government-publication.component';

describe('GovernmentPublicationComponent', () => {
  let component: GovernmentPublicationComponent;
  let fixture: ComponentFixture<GovernmentPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
