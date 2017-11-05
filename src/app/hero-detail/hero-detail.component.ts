import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { GetHeroDetailService } from "../hero-detail-server/get-hero-detail.service"

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    providers: [GetHeroDetailService]
})
export class HeroDetailComponent implements OnInit {
    titile: string = '英雄详情';
    hero_id: number;
    constructor(private act: ActivatedRoute,
        service: HeaderNameService,
        private hD: GetHeroDetailService) {
        service.change.emit(this.titile);
    }

    ngOnInit() {
        this.hero_id = parseInt(this.act.snapshot.paramMap.get('id'));
        this.hD.getHeroDetail(this.hero_id).then((detail) => {
            console.log(detail);
        });
    }

}
