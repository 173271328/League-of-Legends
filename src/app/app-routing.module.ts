import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// 页面组件
import { WelcomeComponent } from './welcome/welcome.component'
import { HomeComponent } from './home/home.component'
import { NewsComponent } from './news/news.component'
import { GamerComponent } from './gamer/gamer.component'
import { HeroesComponent } from './heroes/heroes.component'
import { VideoComponent } from './video/video.component'

const routes: Routes = [
    { path: '', redirectTo: 'wel', pathMatch: 'full' },
    // { path: 'dashboard',  component: DashboardComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
    { path: 'wel', component: WelcomeComponent },
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'news', component: NewsComponent },
            { path: 'gamer', component: GamerComponent },
            { path: 'heroes', component: HeroesComponent },
            { path: 'video', component: VideoComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }