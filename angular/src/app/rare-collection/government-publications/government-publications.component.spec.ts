import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationsComponent } from './government-publications.component';

describe('GovernmentPublicationsComponent', () => {
  let component: GovernmentPublicationsComponent;
  let fixture: ComponentFixture<GovernmentPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
