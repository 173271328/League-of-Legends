import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
import { ActivatedRoute,ParamMap } from '@angular/router'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  title: string = '观看视频';
  detail: SafeHtml;

  constructor(service: HeaderNameService,
    private sanitizer: DomSanitizer,
    private actRouter: ActivatedRoute) {
    service.change.emit(this.title);
  }

  ngOnInit() {
    this.actRouter.queryParamMap.subscribe((params)=>{
      // console.log(params.get('video'));
      this.detail = this.sanitizer.bypassSecurityTrustHtml(params.get('video'));
    })
    // console.log(this.detail = this.sanitizer.bypassSecurityTrustHtml(this.actRouter.snapshot.queryParamMap.get('video')));
    // this.detail = this.sanitizer.bypassSecurityTrustHtml(this.actRouter.snapshot.queryParamMap.video);
    
  }
}
