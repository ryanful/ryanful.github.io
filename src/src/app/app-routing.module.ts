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
  { path: '', component: LandingComponent },
  { path: 'work', component: WorkComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: GalleryPageComponent },
  { path: 'gallery/:id', component: GalleryComponent },
  { path: 'panel/:id', component: PanelComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
