import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class GlobalsModule { }
