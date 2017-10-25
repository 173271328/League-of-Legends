import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KSSwiperModule } from "angular2-swiper";
import { HttpModule } from '@angular/http';

// 服务组件
import { HeaderNameService } from "./headerchange/header-name.service";
import { NewsUrlLinsterService } from "./get-news-url/news-url-linster.service"

// 页面组件
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
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { GamerDetailComponent } from './gamer-detail/gamer-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

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
    NewsDetailComponent,
    VideoComponent,
    GamerDetailComponent,
    VideoDetailComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    KSSwiperModule,
    HttpModule
  ],
  providers: [HeaderNameService, NewsUrlLinsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
