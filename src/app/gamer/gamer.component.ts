import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
import { GetGamerService } from '../get-gamer/get-gamer.service'

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css'],
  providers: [GetGamerService],
})
export class GamerComponent implements OnInit {
  title: string = '玩家';
  heroData: boolean = false;
  searchwords: string;


  constructor(service: HeaderNameService, private getHeroService: GetGamerService) {
    service.change.emit(this.title);
  }
  goSearch(sw) {
    this.getHeroService.getHeroes(sw).then((response) => {
      console.log(response);
      this.heroData = true;
    })
  }
  ngOnInit() {
    // 键盘回车点击事件
    onkeydown = (e) => {
      if (e.keyCode == 13) {
        this.goSearch(this.searchwords);
      }
    }
  }

}
