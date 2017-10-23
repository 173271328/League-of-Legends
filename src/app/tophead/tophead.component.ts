import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tophead',
  templateUrl: './tophead.component.html',
  styleUrls: ['./tophead.component.css']
})
export class TopheadComponent implements OnInit {
  title: String = '';
  constructor() { }

  ngOnInit() {
    if (/news/.test(location.href)) {
      this.title = '资讯';
    } else if (/gamer/.test(location.href)) {
      this.title = '玩家'
    } else if (/heroes/.test(location.href)) {
      this.title = '英雄'
    } else if (/video/.test(location.href)) {
      this.title = '视频'
    }
  }

}
