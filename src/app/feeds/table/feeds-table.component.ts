import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FeedItem, FeedItemResponse } from '../feed-item.model';

@Component({
    selector: 'app-feeds-table',
    templateUrl: './feeds-table.component.html',
    styleUrls: ['./feeds-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedsTableComponent implements OnChanges {
    @Input() feedData: FeedItemResponse;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    displayedColumns: string[] = [
        'publishDate',
        'dateAdded',
        'title',
        'request',
        'downremote',
        'downlocal',
    ];
    dataSource: MatTableDataSource<FeedItem>;
    resultsLength: number;
    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.feeds && changes.feeds.currentValue) {
            this.dataSource = new MatTableDataSource(this.feedData.items);
            this.resultsLength = this.feedData.totalRecords;
            this.dataSource.sort = this.sort;
        }
    }
}
