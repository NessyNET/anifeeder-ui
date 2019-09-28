import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsContainerComponent } from './downloads/downloads-container.component';
import { FeedsContainerComponent } from './feeds/feeds-container.component';
import { RequestsContainerComponent } from './requests/requests-container.component';

// TODO: Add lazy loaded routes
const appRoutes: Routes = [
    { path: '', redirectTo: '/feeds', pathMatch: 'full' },
    { path: 'feeds', component: FeedsContainerComponent },
    { path: 'downloads', component: DownloadsContainerComponent },
    { path: 'requests', component: RequestsContainerComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
