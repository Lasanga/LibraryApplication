import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsLibrarianComponent } from './book-details-librarian.component';

describe('BookDetailsLibrarianComponent', () => {
  let component: BookDetailsLibrarianComponent;
  let fixture: ComponentFixture<BookDetailsLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
