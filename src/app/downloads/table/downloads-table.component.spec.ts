import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsTableComponent } from './downloads-table.component';

describe('DownloadsTableComponent', () => {
    let component: DownloadsTableComponent;
    let fixture: ComponentFixture<DownloadsTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DownloadsTableComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DownloadsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
