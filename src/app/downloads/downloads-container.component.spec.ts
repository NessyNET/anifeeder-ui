import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadsContainerComponent } from './downloads-container.component';

describe('DownloadsComponent', () => {
    let component: DownloadsContainerComponent;
    let fixture: ComponentFixture<DownloadsContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DownloadsContainerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DownloadsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
