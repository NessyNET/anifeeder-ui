import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsContainerComponent } from './requests-container.component';

const requestsRoutes: Routes = [{ path: '', component: RequestsContainerComponent }];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(requestsRoutes)],
    exports: [RouterModule]
})
export class RequestsRoutingModule {}
