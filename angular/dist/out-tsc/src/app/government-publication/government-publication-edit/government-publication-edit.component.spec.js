import { async, TestBed } from '@angular/core/testing';
import { GovernmentPublicationEditComponent } from './government-publication-edit.component';
describe('GovernmentPublicationEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GovernmentPublicationEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GovernmentPublicationEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=government-publication-edit.component.spec.js.map