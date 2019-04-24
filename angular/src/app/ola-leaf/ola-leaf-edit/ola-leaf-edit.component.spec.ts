import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafEditComponent } from './ola-leaf-edit.component';

describe('OlaLeafEditComponent', () => {
  let component: OlaLeafEditComponent;
  let fixture: ComponentFixture<OlaLeafEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
