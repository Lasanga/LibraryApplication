import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaEditComponent } from './ola-edit.component';

describe('OlaEditComponent', () => {
  let component: OlaEditComponent;
  let fixture: ComponentFixture<OlaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
