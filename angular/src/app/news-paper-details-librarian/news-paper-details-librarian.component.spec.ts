import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperDetailsLibrarianComponent } from './news-paper-details-librarian.component';

describe('NewsPaperDetailsLibrarianComponent', () => {
  let component: NewsPaperDetailsLibrarianComponent;
  let fixture: ComponentFixture<NewsPaperDetailsLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaperDetailsLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaperDetailsLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
