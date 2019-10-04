import { A11yModule } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, MatTabsModule, BrowserAnimationsModule, A11yModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
