import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
    title: string = '资讯详情';
    detail: SafeResourceUrl;
    constructor(service: HeaderNameService,
        private sanitizer: DomSanitizer,
        private activatedroute: ActivatedRoute) {
        // 发送标题内容
        service.change.emit(this.title);
    }

    ngOnInit() {
        this.detail = this.sanitizer.bypassSecurityTrustResourceUrl(this.activatedroute.snapshot.params.url);
    }

}
