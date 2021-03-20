import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchCodeInputComponent } from './captch-code-input/captch-code-input.component';
import { MaterialModule } from '@agamotto/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CaptchCodeImgComponent } from './captch-code-img/captch-code-img.component';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [CaptchCodeInputComponent, CaptchCodeImgComponent],
  exports: [CaptchCodeInputComponent, CaptchCodeImgComponent]
})
export class UiModule {}
