import { async, TestBed } from '@angular/core/testing';
import { OlaLeafComponent } from './ola-leaf.component';
describe('OlaLeafComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OlaLeafComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OlaLeafComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ola-leaf.component.spec.js.map