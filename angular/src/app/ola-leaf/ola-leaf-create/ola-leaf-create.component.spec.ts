import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafCreateComponent } from './ola-leaf-create.component';

describe('OlaLeafCreateComponent', () => {
  let component: OlaLeafCreateComponent;
  let fixture: ComponentFixture<OlaLeafCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
