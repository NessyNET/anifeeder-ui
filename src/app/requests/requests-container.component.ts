import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-requests-container',
    templateUrl: './requests-container.component.html',
    styleUrls: ['./requests-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsContainerComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
