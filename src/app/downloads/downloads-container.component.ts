import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faDownload,
    faQuestion,
    faSave,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { shareReplay, take, tap } from 'rxjs/operators';
import { TorrentService } from '../core/torrent';
import { TorrentData } from '../core/torrent/torrent-data.model';

@Component({
    selector: 'app-downloads-container',
    templateUrl: './downloads-container.component.html',
    styleUrls: ['./downloads-container.component.scss'],
})
export class DownloadsContainerComponent implements OnInit {
    loading = true;
    torrentData$: Observable<TorrentData[]>;
    constructor(private _torrentService: TorrentService) {}

    ngOnInit() {
        library.add(faDownload, faSave, faQuestion);
        this.torrentData$ = this._torrentService.getTorrentData().pipe(
            take(1),
            shareReplay(1),
            tap(_ => (this.loading = false))
        );
    }
}
