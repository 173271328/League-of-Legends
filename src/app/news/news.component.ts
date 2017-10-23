import { OnInit, Component, ViewChild, AfterViewInit } from "@angular/core";
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';
import { newsList } from '../../assets/newslist'
import { bannerNews } from '../../assets/banner';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  swiperlist = [];
  newslist = [];

  // swiper的配置
  @ViewChild(KSSwiperContainer)
  swiperContainer: KSSwiperContainer;
  data: Array<number>;
  swipeOptions: any;
  constructor() {
    this.swipeOptions = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 5,
      autoplay: 2000,
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
  }

  ngOnInit() {
    for (var i = 0; i < bannerNews.length; i++) {
      this.swiperlist.push(bannerNews[i]);
    };
    console.log(bannerNews);
    for (var i =0 ; i<newsList.length ;i++){
      this.newslist.push(newsList[i])
    }
    console.log(this.newslist)
  }


}
