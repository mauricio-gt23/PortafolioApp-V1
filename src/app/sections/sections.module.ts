import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ProjectDetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
    ExperiencesComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AboutMeComponent,
    ContactMeComponent,
    ExperiencesComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailComponent
  ]
})
export class SectionsModule { }
