import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title: string = '英雄';
  constructor(service: HeaderNameService) {
    service.change.emit(this.title);
  }

  ngOnInit() {

  }

}
