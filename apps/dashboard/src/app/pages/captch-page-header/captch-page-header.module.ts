import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchPageHeaderComponent } from './captch-page-header.component';
import { MaterialModule } from '@agamotto/material';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [CaptchPageHeaderComponent],
  exports: [CaptchPageHeaderComponent]
})
export class CaptchPageHeaderModule { }
