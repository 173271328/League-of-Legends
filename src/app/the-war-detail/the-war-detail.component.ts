import { Component, OnInit } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
@Component({
    selector: 'app-the-war-detail',
    templateUrl: './the-war-detail.component.html',
    styleUrls: ['./the-war-detail.component.css']
})
export class TheWarDetailComponent implements OnInit {
    title: string = '对战详情'
    constructor(service: HeaderNameService) {
        service.change.emit(this.title)
    }

    ngOnInit() {
    }

}
