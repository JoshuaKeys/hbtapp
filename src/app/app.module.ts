import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppAdvantageComponent } from './components/advantage/advantage.component';
import { AppAdvantagesComponent } from './components/advantages/advantages.component';
import { AppFooterComponent } from './components/footer/footer.component';
import { AppHeaderComponent } from './components/header/header.component';
import { AppShowcaseComponent } from './components/showcase/showcase.component';
import { AppTestimonialComponent } from './components/testimonial/testimonial.component';
import { AboutComponent } from './pages/about/about.component';
import { AppContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: AppContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppTestimonialComponent,
    HomeComponent,
    AboutComponent,
    AppAdvantageComponent,
    AppShowcaseComponent,
    AppAdvantagesComponent,
    AppContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
