import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsContainerComponent } from './downloads-container.component';

const downloadsRoutes: Routes = [{ path: '', component: DownloadsContainerComponent }];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(downloadsRoutes)],
    exports: [RouterModule]
})
export class DownloadsRoutingModule {}
