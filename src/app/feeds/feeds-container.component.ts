import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faQuestion, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { shareReplay, take, tap } from 'rxjs/operators';
import { TorrentService } from '../core/torrent';
import { FeedItemResponse } from './feed-item.model';
import { FeedsService } from './feed.service';

@Component({
    selector: 'app-feeds-container',
    templateUrl: './feeds-container.component.html',
    styleUrls: ['./feeds-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedsContainerComponent implements OnInit {
    feedData$: Observable<FeedItemResponse>;
    loading = true;
    constructor(private _feedsService: FeedsService, private _torrentService: TorrentService) {}

    ngOnInit() {
        library.add(faDownload, faSave, faQuestion);
        this.feedData$ = this._feedsService.getFeedData().pipe(
            take(1),
            shareReplay(1),
            tap(_ => (this.loading = false))
        );
    }

    submitRequest(params: { feed: string; url: string }): void {
        this._torrentService.sendDownloadRequest(params.feed, params.url);
    }
}
