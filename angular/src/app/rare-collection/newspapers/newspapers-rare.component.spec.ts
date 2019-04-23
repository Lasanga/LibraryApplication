import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspapersRareComponent } from './newspapers-rare.component';

describe('NewspapersRareComponent', () => {
  let component: NewspapersRareComponent;
  let fixture: ComponentFixture<NewspapersRareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspapersRareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspapersRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
