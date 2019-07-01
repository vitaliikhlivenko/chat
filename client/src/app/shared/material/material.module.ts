import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
