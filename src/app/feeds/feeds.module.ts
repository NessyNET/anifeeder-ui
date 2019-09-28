import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedsContainerComponent } from './feeds-container.component';
import { FeedsTableComponent } from './table/feeds-table.component';

@NgModule({
    declarations: [FeedsContainerComponent, FeedsTableComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        FontAwesomeModule,
    ],
    exports: [FeedsContainerComponent],
})
export class FeedsModule {}
