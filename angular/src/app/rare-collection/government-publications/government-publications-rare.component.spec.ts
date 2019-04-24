import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentPublicationsRareComponent } from './government-publications-rare.component';

describe('GovernmentPublicationsRareComponent', () => {
  let component: GovernmentPublicationsRareComponent;
  let fixture: ComponentFixture<GovernmentPublicationsRareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPublicationsRareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentPublicationsRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
