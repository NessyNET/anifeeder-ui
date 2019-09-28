export interface FeedItem {
    title: string;
    link: string;
    publishDate: string;
    regexMatch: boolean;
    regexExpr: string;
    downloaded: boolean;
    dateAdded: string;
}

export interface FeedItemResponse {
    items: FeedItem[];
    totalRecords: number;
}
