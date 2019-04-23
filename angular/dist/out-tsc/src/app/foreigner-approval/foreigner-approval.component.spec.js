import { async, TestBed } from '@angular/core/testing';
import { ForeignerApprovalComponent } from './foreigner-approval.component';
describe('ForeignerApprovalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ForeignerApprovalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ForeignerApprovalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foreigner-approval.component.spec.js.map