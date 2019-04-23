import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationsRareEditComponent } from './government-publications-rare-edit.component';

describe('GovernmentPublicationsRareEditComponent', () => {
  let component: GovernmentPublicationsRareEditComponent;
  let fixture: ComponentFixture<GovernmentPublicationsRareEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationsRareEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationsRareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
