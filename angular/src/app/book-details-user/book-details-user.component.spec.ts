import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsUserComponent } from './book-details-user.component';

describe('BookDetailsUserComponent', () => {
  let component: BookDetailsUserComponent;
  let fixture: ComponentFixture<BookDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
