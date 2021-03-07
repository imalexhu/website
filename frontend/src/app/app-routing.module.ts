import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/content/contact/contact.component';
import { AboutMeComponent } from './pages/content/about-me/about-me.component';
import { HobbiesComponent } from './pages/content/hobbies/hobbies.component';
import { ProjectsComponent } from './pages/content/projects/projects.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: "", component: LandingComponent,
    children: [
      { path: "about-me", component: AboutMeComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "general", component: HobbiesComponent },
      {path: "", redirectTo: "about-me", pathMatch:"full"},
      { path: "contact", component: ContactComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
