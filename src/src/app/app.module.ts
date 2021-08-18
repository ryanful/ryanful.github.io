import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLandingComponent } from './main-landing/main-landing/main-landing.component';
import { PhotoPortV1Component } from './photo-port-v1/photo-port-v1/photo-port-v1.component';
import { PhotoV1LandingComponent } from './photo-port-v1/photo-v1-landing/photo-v1-landing.component';
import { PhotoV1NavComponent } from './photo-port-v1/photo-v1-nav/photo-v1-nav.component';
import { PhotoV1WorkComponent } from './photo-port-v1/photo-v1-work/photo-v1-work.component';
import { PhotoV1ProjectsComponent } from './photo-port-v1/photo-v1-projects/photo-v1-projects.component';
import { PhotoV1AboutComponent } from './photo-port-v1/photo-v1-about/photo-v1-about.component';
import { PhotoV1GalleryPageComponent } from './photo-port-v1/photo-v1-gallery-page/photo-v1-gallery-page.component';
import { PhotoV1GalleryComponent } from './photo-port-v1/photo-v1-gallery/photo-v1-gallery.component';
import { PhotoV1PanelComponent } from './photo-port-v1/photo-v1-panel/photo-v1-panel.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesService } from './images.service';
import { PanelComponent } from './panel/panel.component';

import { PhotobookComponent } from './photobook/photobook/photobook.component';
import { PhotobookLandingComponent } from './photobook/photobook-landing/photobook-landing.component';
import { PhotobookNavComponent } from './photobook/photobook-nav/photobook-nav.component';
import { PhotobookAboutComponent } from './photobook/photobook-about/photobook-about.component';
import { PhotobookTOCComponent } from './photobook/photobook-toc/photobook-toc.component';
import { PhotobookHeaderComponent } from './photobook/photobook-header/photobook-header.component';
import { PhotobookPortfolioComponent } from './photobook/photobook-portfolio/photobook-portfolio.component';
import { PhotobookProjectsComponent } from './photobook/photobook-projects/photobook-projects.component';
import { PhotobookContactComponent } from './photobook/photobook-contact/photobook-contact.component';
import { FormsModule } from '@angular/forms';

const providers = [ImagesService]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    WorkComponent,
    ProjectsComponent,
    AboutComponent,
    GalleryPageComponent,
    GalleryComponent,
    PanelComponent,
    MainLandingComponent,
    PhotoPortV1Component,
    PhotoV1NavComponent,
    PhotoV1LandingComponent,
    PhotoV1WorkComponent,
    PhotoV1ProjectsComponent,
    PhotoV1AboutComponent,
    PhotoV1GalleryPageComponent,
    PhotoV1GalleryComponent,
    PhotoV1PanelComponent,
    PhotobookComponent,
    PhotobookLandingComponent,
    PhotobookNavComponent,
    PhotobookAboutComponent,
    PhotobookTOCComponent,
    PhotobookHeaderComponent,
    PhotobookPortfolioComponent,
    PhotobookProjectsComponent,
    PhotobookContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class PhotoSiteV1Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
