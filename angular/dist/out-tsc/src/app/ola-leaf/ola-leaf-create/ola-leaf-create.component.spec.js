import { async, TestBed } from '@angular/core/testing';
import { OlaLeafCreateComponent } from './ola-leaf-create.component';
describe('OlaLeafCreateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OlaLeafCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OlaLeafCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ola-leaf-create.component.spec.js.map