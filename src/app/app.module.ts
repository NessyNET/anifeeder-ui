import { A11yModule } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadsModule } from './downloads/downloads.module';
import { FeedsModule } from './feeds/feeds.module';
import { RequestsModule } from './requests/requests.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatTabsModule,
        BrowserAnimationsModule,
        A11yModule,
        AppRoutingModule,
        DownloadsModule,
        FeedsModule,
        RequestsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(router: Router) {}
}
