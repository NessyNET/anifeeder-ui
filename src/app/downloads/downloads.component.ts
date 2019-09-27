import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TorrentDataService} from '../torrent-data.service';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faDownload, faQuestion, faSave} from '@fortawesome/free-solid-svg-icons';
import {FeedItem} from '../feedtable/feedtable.component';

export interface FeedItem {
  name: string;
  completed: boolean;
  dateAdded: string;
  sizeBytes: bigint;
}

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['dateAdded', 'sizeBytes', 'title'];
  dataSource: MatTableDataSource<FeedItem>;
  loading;

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private torrentService: TorrentDataService) {
    library.add(faDownload, faSave, faQuestion);
  }

  ngAfterViewInit() {
    this.torrentService.getTorrentData().subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loading = true;
  }

  humanFileSize(bytes, si) {
    const threshold = si ? 1000 : 1024;
    if (Math.abs(bytes) < threshold) {
      return bytes + ' B';
    }
    const units = si
      ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    do {
      bytes /= threshold;
      ++u;
    } while (Math.abs(bytes) >= threshold && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
  }
}
