import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FeedDataService} from '../feed-data.service';
import {DownloadRequest, TorrentDataService} from '../torrent-data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faDownload, faQuestion, faSave} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';

export interface FeedItem {
  title: string;
  link: string;
  publishDate: string;
  regexMatch: boolean;
  regexExpr: string;
  downloaded: boolean;
  dateAdded: string;
}

@Component({
  selector: 'app-feedtable',
  templateUrl: './feedtable.component.html',
  styleUrls: ['./feedtable.component.css']
})
export class FeedtableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['publishDate', 'dateAdded', 'title', 'request', 'downremote', 'downlocal'];
  dataSource: MatTableDataSource<FeedItem>;
  loading;
  resultsLength = 0;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private feedService: FeedDataService, private torrentService: TorrentDataService, private httpClient: HttpClient) {
    library.add(faDownload, faSave, faQuestion);
  }

  ngAfterViewInit() {
    this.feedService.getFeedData().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.items);
      this.resultsLength = data.totalRecords;
      this.dataSource.sort = this.sort;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
  }

  submitRequest(feed, url): void {
    const id = url.split(/[//]+/).pop();
    const request: DownloadRequest = {feed, id, requestTimestamp: new Date()};
    this.torrentService.sendDownloadRequest(request);
  }
}
