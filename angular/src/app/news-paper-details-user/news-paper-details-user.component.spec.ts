import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperDetailsUserComponent } from './news-paper-details-user.component';

describe('NewsPaperDetailsUserComponent', () => {
  let component: NewsPaperDetailsUserComponent;
  let fixture: ComponentFixture<NewsPaperDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaperDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaperDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
