import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'

@Component({
  selector: 'app-gamer-detail',
  templateUrl: './gamer-detail.component.html',
  styleUrls: ['./gamer-detail.component.css']
})
export class GamerDetailComponent implements OnInit {
  title: string = '召唤师详情';
  constructor(service: HeaderNameService) {
    service.change.emit(this.title);
  }

  ngOnInit() {
  }

}
