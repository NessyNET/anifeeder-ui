import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { TorrentData } from 'src/app/core/torrent/';

@Component({
    selector: 'app-downloads-table',
    templateUrl: './downloads-table.component.html',
    styleUrls: ['./downloads-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadsTableComponent implements OnChanges {
    @Input() torrentData: TorrentData[];
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    displayedColumns: string[] = ['dateAdded', 'sizeBytes', 'title'];
    dataSource: MatTableDataSource<TorrentData>;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.torrentData && changes.torrentData.currentValue) {
            this.dataSource = new MatTableDataSource(this.torrentData);
            this.dataSource.sort = this.sort;
        }
    }
}
