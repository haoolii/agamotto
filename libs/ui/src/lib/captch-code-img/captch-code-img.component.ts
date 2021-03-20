import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'agto-captch-code-img',
  templateUrl: './captch-code-img.component.html',
  styleUrls: ['./captch-code-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaptchCodeImgComponent implements OnInit {

  @Input() width = '';
  @Input() height = '';
  @Input() src = '';

  constructor() { }

  ngOnInit(): void {
  }

  get styleObj(): Object {
    return {
      width: this.width,
      height: this.height
    };
  }
}
