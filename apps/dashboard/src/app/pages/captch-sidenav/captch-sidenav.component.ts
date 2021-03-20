import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { map } from 'rxjs/operators';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;


@Component({
  selector: 'agto-captch-sidenav',
  templateUrl: './captch-sidenav.component.html',
  styleUrls: ['./captch-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CaptchSidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isScreenSmall = this.breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
  .pipe(map(breakpoint => breakpoint.matches));
  isExtraScreenSmall = this.breakpoints.observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
  .pipe(map(breakpoint => breakpoint.matches));

  constructor(
    private breakpoints: BreakpointObserver
  ) {}

  ngOnInit(): void {
  }

  toggleSidenav(sidenav: MatSidenav): Promise<MatDrawerToggleResult> {
    return sidenav.toggle();
  }

}
