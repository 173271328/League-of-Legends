import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
import { GetHeroListService } from '../hero-list-server/get-hero-list.service'

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [GetHeroListService]
})
export class HeroesComponent implements OnInit {
    title: string = '英雄';
    herolist;
    constructor(service: HeaderNameService, private heroList: GetHeroListService) {
        service.change.emit(this.title);
    }

    ngOnInit() {
        this.heroList.GetHeroList().then((herolist => {
            this.herolist = herolist;
            console.log(this.herolist);
        }))
    }

}
