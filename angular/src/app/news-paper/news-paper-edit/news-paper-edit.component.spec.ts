import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperEditComponent } from './news-paper-edit.component';

describe('NewsPaperEditComponent', () => {
  let component: NewsPaperEditComponent;
  let fixture: ComponentFixture<NewsPaperEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaperEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
