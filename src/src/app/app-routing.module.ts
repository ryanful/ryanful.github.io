import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  { path: 'photo-port-v1', component: LandingComponent },
  { path: 'photo-port-v1/work', component: WorkComponent },
  { path: 'photo-port-v1/projects', component: ProjectsComponent },
  { path: 'photo-port-v1/about', component: AboutComponent },
  { path: 'photo-port-v1/portfolio', component: GalleryPageComponent },
  { path: 'photo-port-v1/gallery/:id', component: GalleryComponent },
  { path: 'photo-port-v1/panel/:id', component: PanelComponent },
  { path: 'photo-port-v1/resume', redirectTo: '../assets/RaheelYanful-Resume.pdf' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
