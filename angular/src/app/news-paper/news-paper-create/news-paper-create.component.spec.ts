import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaperCreateComponent } from './news-paper-create.component';

describe('NewsPaperCreateComponent', () => {
  let component: NewsPaperCreateComponent;
  let fixture: ComponentFixture<NewsPaperCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaperCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaperCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
