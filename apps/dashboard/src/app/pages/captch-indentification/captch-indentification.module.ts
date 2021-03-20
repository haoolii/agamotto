import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchIndentificationComponent } from './captch-indentification.component';



@NgModule({
  declarations: [CaptchIndentificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaptchIndentificationComponent
      }
    ])
  ]
})
export class CaptchIndentificationModule { }
