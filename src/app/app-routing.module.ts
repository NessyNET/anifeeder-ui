import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedtableComponent} from './feedtable/feedtable.component';
import {DownloadsComponent} from './downloads/downloads.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/feeds', pathMatch: 'full'},
  {path: 'feeds', component: FeedtableComponent},
  {path: 'downloads', component: DownloadsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
