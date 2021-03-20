import { CaptchIndentificationComponent } from './../captch-indentification/captch-indentification.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@agamotto/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchSidenavComponent } from './captch-sidenav.component';
import { CaptchPageHeaderModule } from '../captch-page-header/captch-page-header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CaptchNavComponent } from '../captch-nav/captch-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [CaptchSidenavComponent, CaptchNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CaptchPageHeaderModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaptchSidenavComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../captch-main/captch-main.module').then(m => m.CaptchMainModule)
          },
          {
            path: 'indentification',
            loadChildren: () => import('../captch-indentification/captch-indentification.module').then(m => m.CaptchIndentificationModule)
          }
        ]
      }
    ])
  ]
})
export class CaptchSidenavModule { }
