import { async, TestBed } from '@angular/core/testing';
import { NotFound404Component } from './not-found404.component';
describe('NotFound404Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NotFound404Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NotFound404Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=not-found404.component.spec.js.map