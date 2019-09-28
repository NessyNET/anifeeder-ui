import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { DownloadsContainerComponent } from './downloads-container.component';
import { DownloadsTableComponent } from './table/downloads-table.component';

@NgModule({
    declarations: [DownloadsContainerComponent, DownloadsTableComponent],
    imports: [BrowserModule, MatTableModule, MatProgressSpinnerModule],
    exports: [DownloadsContainerComponent],
})
export class DownloadsModule {}
