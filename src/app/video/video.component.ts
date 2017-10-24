import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
import { videoList } from '../../assets/videolist'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title: string = '视频';
  videolist = videoList;

  constructor(service: HeaderNameService) {
    service.change.emit(this.title);
  }

  ngOnInit() {
    console.log(videoList);
  }

}
