import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// 页面组件
import { WelcomeComponent } from './welcome/welcome.component'
import { HomeComponent } from './home/home.component'
import { NewsComponent } from './news/news.component'
import { GamerComponent } from './gamer/gamer.component'
import { HeroesComponent } from './heroes/heroes.component'
import { VideoComponent } from './video/video.component'
import { NewsDetailComponent } from './news-detail/news-detail.component'
import { VideoDetailComponent } from './video-detail/video-detail.component'
import { WhatAreYouDoingComponent } from './what-are-you-doing/what-are-you-doing.component'
import { GamerDetailComponent } from './gamer-detail/gamer-detail.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { TheWarDetailComponent } from './the-war-detail/the-war-detail.component'


const routes: Routes = [
    { path: '', redirectTo: 'wel', pathMatch: 'full' },
    { path: 'home', redirectTo: 'home/news', pathMatch: 'full' },
    // { path: 'dashboard',  component: DashboardComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
    { path: 'wel', component: WelcomeComponent },
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'news', component: NewsComponent },
            { path: 'gamer', component: GamerComponent },
            { path: 'heroes', component: HeroesComponent },
            { path: 'video', component: VideoComponent },
            { path: 'news-detail', component: NewsDetailComponent },
            { path: 'video-detail', component: VideoDetailComponent },
            { path: 'gamer-detail', component: GamerDetailComponent },
            { path: 'hero-detail', component: HeroDetailComponent },
            { path: 'the-war-detail', component: TheWarDetailComponent }
        ]
    },
    { path: '**', component: WhatAreYouDoingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }