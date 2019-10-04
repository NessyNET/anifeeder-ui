import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsContainerComponent } from './feeds-container.component';

const feedsRoutes: Routes = [{ path: '', component: FeedsContainerComponent }];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(feedsRoutes)],
    exports: [RouterModule]
})
export class FeedsRoutingModule {}
