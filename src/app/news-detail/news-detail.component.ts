import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  detail:string ='http://qt.qq.com/php_cgi/news/php/varcache_article.php?id=28955';
  constructor() { }

  ngOnInit() {
    console.log(this.detail)
  }

}
