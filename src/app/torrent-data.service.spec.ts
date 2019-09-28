import { TestBed } from '@angular/core/testing';
import { TorrentDataService } from './torrent-data.service';

describe('TorrentDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TorrentDataService = TestBed.get(TorrentDataService);
        expect(service).toBeTruthy();
    });
});
