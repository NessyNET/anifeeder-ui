import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestsContainerComponent } from './requests-container.component';
import { RequestsRoutingModule } from './requests-routing.module';

@NgModule({
    declarations: [RequestsContainerComponent],
    imports: [CommonModule, RequestsRoutingModule],
    exports: [RequestsContainerComponent],
})
export class RequestsModule {}
