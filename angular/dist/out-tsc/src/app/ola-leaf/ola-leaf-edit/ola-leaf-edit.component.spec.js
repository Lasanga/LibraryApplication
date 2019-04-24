import { async, TestBed } from '@angular/core/testing';
import { OlaLeafEditComponent } from './ola-leaf-edit.component';
describe('OlaLeafEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OlaLeafEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OlaLeafEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ola-leaf-edit.component.spec.js.map