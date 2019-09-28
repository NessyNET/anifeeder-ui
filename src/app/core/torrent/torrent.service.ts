import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NON_SI_UNITS, SI_UNITS } from '../constants';
import { TorrentData } from './torrent-data.model';
import { TorrentDownloadRequest } from './torrent-download-request.model';

@Injectable({
    providedIn: 'root',
})
export class TorrentService {
    url = 'api/torrents/';

    constructor(private _http: HttpClient) {}

    getTorrentData(): Observable<TorrentData[]> {
        return this._http.get<TorrentData[]>(this.url).pipe(
            map(torrentData =>
                torrentData.map(data => ({
                    ...data,
                    humanReadableSize: this._parseBytesToHumanReadable(
                        data.sizeBytes
                    ),
                }))
            )
        );
    }

    sendDownloadRequest(feed: string, url: string): void {
        const id = url.split(/[//]+/).pop();
        const request: TorrentDownloadRequest = {
            feed,
            id,
            requestTimestamp: new Date(),
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        // TODO: Check this response
        this._http.post(this.url, request, httpOptions);
    }

    private _parseBytesToHumanReadable(
        bytes: number,
        si: boolean = false
    ): string {
        const threshold = si ? 1000 : 1024;
        if (Math.abs(bytes) < threshold) {
            return bytes + ' B';
        }
        const units = si ? SI_UNITS : NON_SI_UNITS;
        let u = -1;
        do {
            bytes /= threshold;
            ++u;
        } while (Math.abs(bytes) >= threshold && u < units.length - 1);
        return bytes.toFixed(1) + ' ' + units[u];
    }
}
