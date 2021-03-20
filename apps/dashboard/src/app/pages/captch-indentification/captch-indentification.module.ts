import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule} from '@agamotto/ui';
import { MaterialModule } from '@agamotto/material';
import { CaptchIndentificationComponent } from './captch-indentification.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CaptchIndentificationComponent],
  imports: [
    CommonModule,
    UiModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaptchIndentificationComponent
      }
    ])
  ]
})
export class CaptchIndentificationModule { }
