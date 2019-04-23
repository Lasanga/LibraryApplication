import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationCreateComponent } from './government-publication-create.component';

describe('GovernmentPublicationCreateComponent', () => {
  let component: GovernmentPublicationCreateComponent;
  let fixture: ComponentFixture<GovernmentPublicationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
