import { OnInit, Component, ViewChild, AfterViewInit } from "@angular/core";
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';
import { newsList } from '../../assets/newslist'
import { bannerNews } from '../../assets/banner';
import { HeaderNameService } from '../headerchange/header-name.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  swiperlist: any = bannerNews;
  newslist: any = newsList;
  title: string = '资讯';

  // swiper的配置
  @ViewChild(KSSwiperContainer)
  swiperContainer: KSSwiperContainer;
  swipeOptions: any;
  constructor(service: HeaderNameService) {
    this.swipeOptions = {
      slidesPerView: 1,
      loop: true,
      autoplay: 2000,
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
    service.change.emit(this.title);
  }

  ngOnInit() {

  }


}
