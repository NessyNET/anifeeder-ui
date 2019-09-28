import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { FeedtableComponent } from './feedtable/feedtable.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/feeds', pathMatch: 'full' },
    { path: 'feeds', component: FeedtableComponent },
    { path: 'downloads', component: DownloadsComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
