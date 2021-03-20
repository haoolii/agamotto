import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agto-captch-indentification',
  templateUrl: './captch-indentification.component.html',
  styleUrls: ['./captch-indentification.component.scss']
})
export class CaptchIndentificationComponent implements OnInit {

  listOfCodeImage = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
    'assets/5.png',
    'assets/6.png',
    'assets/7.png',
    'assets/8.png',
    'assets/9.png',
  ]

  code = '12345';

  image = this.listOfCodeImage[0];

  index = 0;

  constructor() { }

  ngOnInit(): void {

  }

  codeChange(v): void {
    this.index = this.index += 1;
    console.log(this.index);
    this.image = this.listOfCodeImage[this.index];
    this.code = v;
    setTimeout(() => this.code = '', 500);
  }
}
