import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

export interface DownloadRequest {
  feed: string;
  id: string;
  requestTimestamp: Date;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TorrentDataService {
  url = 'http://localhost:8080/torrents/';

  constructor(private http: HttpClient) {
  }

  getTorrentData(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  sendDownloadRequest(request: DownloadRequest): void {
    console.log(request);
    this.http.post(this.url, request, httpOptions).subscribe(
      data => console.log('Request successful.', data),
      error => console.log('Error!', error)
    );
  }
}
