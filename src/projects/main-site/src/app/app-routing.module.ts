import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { PhotoSiteV1Module } from 'src/app/app.module';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'photo-port-v1', loadChildren: 'src/app/app.module#PhotoSiteV1Module' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PhotoSiteV1Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
