import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspapersComponent } from './newspapers.component';

describe('NewspapersComponent', () => {
  let component: NewspapersComponent;
  let fixture: ComponentFixture<NewspapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
