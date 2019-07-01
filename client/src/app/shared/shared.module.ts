import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [ 
    MaterialModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
