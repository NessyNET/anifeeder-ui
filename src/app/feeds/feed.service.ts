import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedItemResponse } from './feed-item.model';

@Injectable({
    providedIn: 'root'
})
export class FeedsService {
    url = 'api/feeditems/';

    constructor(private _http: HttpClient) {}

    getFeedData(): Observable<FeedItemResponse> {
        return this._http.get<FeedItemResponse>(this.url);
    }
}
