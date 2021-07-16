import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLandingComponent } from './main-landing/main-landing/main-landing.component';

import { PhotoPortV1Component } from './photo-port-v1/photo-port-v1/photo-port-v1.component';
import { PhotoV1LandingComponent } from './photo-port-v1/photo-v1-landing/photo-v1-landing.component';
import { PhotoV1WorkComponent } from './photo-port-v1/photo-v1-work/photo-v1-work.component';
import { PhotoV1ProjectsComponent } from './photo-port-v1/photo-v1-projects/photo-v1-projects.component';
import { PhotoV1AboutComponent } from './photo-port-v1/photo-v1-about/photo-v1-about.component';
import { PhotoV1GalleryPageComponent } from './photo-port-v1/photo-v1-gallery-page/photo-v1-gallery-page.component';
import { PhotoV1GalleryComponent } from './photo-port-v1/photo-v1-gallery/photo-v1-gallery.component';
import { PhotoV1PanelComponent } from './photo-port-v1/photo-v1-panel/photo-v1-panel.component';

import { PhotobookComponent } from './photobook/photobook/photobook.component';
import { PhotobookLandingComponent } from './photobook/photobook-landing/photobook-landing.component';
import { PhotobookAboutComponent } from './photobook/photobook-about/photobook-about.component';
import { PhotobookTOCComponent } from './photobook/photobook-toc/photobook-toc.component';

const routes: Routes = [
  { path: '', component: MainLandingComponent },
  {
    path: 'photobook', component: PhotobookComponent,
    children: [
      { path: '', component: PhotobookLandingComponent },
      { path: 'table-of-contents', component: PhotobookTOCComponent },
      { path: 'work', component: PhotoV1WorkComponent },
      { path: 'projects', component: PhotoV1ProjectsComponent },
      { path: 'about', component: PhotobookAboutComponent },
      { path: 'portfolio', component: PhotoV1GalleryPageComponent },
      { path: 'gallery/:id', component: PhotoV1GalleryComponent },
      { path: 'panel/:id', component: PhotoV1PanelComponent },
      { path: 'resume', redirectTo: '../assets/RaheelYanful-Resume.pdf' }
    ]
  },
  {
    path: 'photo-port-v1', component: PhotoPortV1Component,
    children: [
      { path: '', component: PhotoV1LandingComponent },
      { path: 'work', component: PhotoV1WorkComponent },
      { path: 'projects', component: PhotoV1ProjectsComponent },
      { path: 'about', component: PhotoV1AboutComponent },
      { path: 'portfolio', component: PhotoV1GalleryPageComponent },
      { path: 'gallery/:id', component: PhotoV1GalleryComponent },
      { path: 'panel/:id', component: PhotoV1PanelComponent },
      { path: 'resume', redirectTo: '../assets/RaheelYanful-Resume.pdf' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
