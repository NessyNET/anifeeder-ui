import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestsContainerComponent } from './requests-container.component';

@NgModule({
    declarations: [RequestsContainerComponent],
    imports: [CommonModule],
    exports: [RequestsContainerComponent],
})
export class RequestsModule {}
