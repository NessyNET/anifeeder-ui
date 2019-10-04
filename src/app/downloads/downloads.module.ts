import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { DownloadsContainerComponent } from './downloads-container.component';
import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsTableComponent } from './table/downloads-table.component';

@NgModule({
    declarations: [DownloadsContainerComponent, DownloadsTableComponent],
    imports: [CommonModule, DownloadsRoutingModule, MatTableModule, MatProgressSpinnerModule],
    exports: [DownloadsContainerComponent]
})
export class DownloadsModule {}
