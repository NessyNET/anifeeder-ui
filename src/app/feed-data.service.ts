import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FeedDataService {
    url = 'http://localhost:8080/feeditems/';

    constructor(private http: HttpClient) {}

    getFeedData(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
}
