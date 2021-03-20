import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'agto-captch-page-header',
  templateUrl: './captch-page-header.component.html',
  styleUrls: ['./captch-page-header.component.scss']
})
export class CaptchPageHeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
