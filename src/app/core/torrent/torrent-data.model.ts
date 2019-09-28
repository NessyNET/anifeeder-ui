export interface TorrentData {
    name: string;
    completed: boolean;
    dateAdded: string;
    sizeBytes: number;
    humanReadableSize?: string;
}
