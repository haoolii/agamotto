import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'agto-captch-sidenav',
  templateUrl: './captch-sidenav.component.html',
  styleUrls: ['./captch-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CaptchSidenavComponent implements OnInit {

  isScreenSmall = of(true)
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  ngOnInit(): void {
  }

}
