import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesService } from './images.service';
import { PanelComponent } from './panel/panel.component';

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
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
