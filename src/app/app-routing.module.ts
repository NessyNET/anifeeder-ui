import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/feeds', pathMatch: 'full' },
    {
        path: 'feeds',
        loadChildren: () =>
            import('./feeds/feeds.module').then(m => m.FeedsModule),
    },
    {
        path: 'downloads',
        loadChildren: () =>
            import('./downloads/downloads.module').then(m => m.DownloadsModule),
    },
    {
        path: 'requests',
        loadChildren: () =>
            import('./requests/requests.module').then(m => m.RequestsModule),
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
