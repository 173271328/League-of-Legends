import { Component, OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { HeaderNameService } from '../headerchange/header-name.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tophead',
  templateUrl: './tophead.component.html',
  styleUrls: ['./tophead.component.css']
})
export class TopheadComponent implements OnInit {
  // 组件接收数据
  public title: string = '';


  constructor(
    service: HeaderNameService,
    private router: Router) {

    service.change
      .subscribe((value: string) => {
        this.title = value;
      })
  }
  goBack() {
    if (/news$|gamer$|heroes$|video$/.test(location.href)) {
      this.router.navigate(['wel']);
    } else {
      window.history.back();
    }
  }
  ngOnInit() {

  }

}
