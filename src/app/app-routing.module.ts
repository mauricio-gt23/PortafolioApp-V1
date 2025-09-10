import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { ProjectDetailComponent } from './sections/projectdetail/projectdetail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'experience', component: ExperiencesComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
