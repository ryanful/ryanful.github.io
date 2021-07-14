import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PhotoSiteV1Module } from 'src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoSiteV1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
