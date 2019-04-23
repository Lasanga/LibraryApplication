import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RareNewspapersEditComponent } from './rare-newspapers-edit.component';

describe('RareNewspapersEditComponent', () => {
  let component: RareNewspapersEditComponent;
  let fixture: ComponentFixture<RareNewspapersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RareNewspapersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RareNewspapersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
