import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContentComponent } from './pages/content/content.component';
import { NavComponent } from './pages/nav/nav.component';
import { AboutMeComponent } from './pages/content/about-me/about-me.component';
import { HobbiesComponent } from './pages/content/hobbies/hobbies.component';
import { ProjectsComponent } from './pages/content/projects/projects.component';
import { ContactComponent } from './pages/content/contact/contact.component';
import { IntroComponent } from './intro/intro.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContentComponent,
    NavComponent,
    AboutMeComponent,
    HobbiesComponent,
    ProjectsComponent,
    ContactComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
