import { RouterModule } from '@angular/router';
import { MaterialModule } from '@agamotto/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchSidenavComponent } from './captch-sidenav.component';
import { CaptchPageHeaderModule } from '../captch-page-header/captch-page-header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CaptchNavComponent } from '../captch-nav/captch-nav.component';
// import { CaptchPageHeaderComponent } from './../captch-page-header/captch-page-header.component';


@NgModule({
  declarations: [CaptchSidenavComponent, CaptchNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CaptchPageHeaderModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaptchSidenavComponent,
        // children: [
        //   // {
        //   //   path: 'captcha',
        //   //   component: CaptchPageHeaderComponent
        //   // }
        // ]
      }
    ])
  ]
})
export class CaptchSidenavModule { }
