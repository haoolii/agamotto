import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchMainComponent } from './captch-main.component';



@NgModule({
  declarations: [CaptchMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaptchMainComponent
      }
    ])
  ]
})
export class CaptchMainModule { }
