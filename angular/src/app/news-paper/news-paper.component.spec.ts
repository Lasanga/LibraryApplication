import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperComponent } from './news-paper.component';

describe('NewsPaperComponent', () => {
  let component: NewsPaperComponent;
  let fixture: ComponentFixture<NewsPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
