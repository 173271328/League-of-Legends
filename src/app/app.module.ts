import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KSSwiperModule } from "angular2-swiper";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsComponent } from './news/news.component';
import { TopheadComponent } from './tophead/tophead.component';
import { BottomfootComponent } from './bottomfoot/bottomfoot.component';
import { HomeComponent } from './home/home.component';
import { GamerComponent } from './gamer/gamer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewsComponent,
    TopheadComponent,
    BottomfootComponent,
    HomeComponent,
    GamerComponent,
    HeroesComponent,
    VideoComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    KSSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
