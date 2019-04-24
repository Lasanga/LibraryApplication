import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RareBooksEditComponent } from './rare-books-edit.component';

describe('RareBooksEditComponent', () => {
  let component: RareBooksEditComponent;
  let fixture: ComponentFixture<RareBooksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RareBooksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RareBooksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
