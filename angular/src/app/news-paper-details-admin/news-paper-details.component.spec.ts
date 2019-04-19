import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperDetailsComponent } from './news-paper-details.component';

describe('NewsPaperDetailsComponent', () => {
  let component: NewsPaperDetailsComponent;
  let fixture: ComponentFixture<NewsPaperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
