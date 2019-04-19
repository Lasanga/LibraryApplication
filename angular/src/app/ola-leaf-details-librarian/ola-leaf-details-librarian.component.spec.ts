import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafDetailsLibrarianComponent } from './ola-leaf-details-librarian.component';

describe('OlaLeafDetailsLibrarianComponent', () => {
  let component: OlaLeafDetailsLibrarianComponent;
  let fixture: ComponentFixture<OlaLeafDetailsLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafDetailsLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafDetailsLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
