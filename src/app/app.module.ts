import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ClassesComponent,
    CompetitionsComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
      { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
      { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
      { path: 'competitions', component: CompetitionsComponent, data: { animation: 'CompetitionsPage' } },
      { path: 'gallery', component: GalleryComponent, data: { animation: 'GalleryPage' } },
      { path: 'classes', component: ClassesComponent, data: { animation: 'ClassesPage' } },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
