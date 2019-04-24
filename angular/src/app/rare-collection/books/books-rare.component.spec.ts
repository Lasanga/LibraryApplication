import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRareComponent } from './books-rare.component';

describe('BooksComponent', () => {
  let component: BooksRareComponent;
  let fixture: ComponentFixture<BooksRareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksRareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
