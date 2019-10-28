import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatSidenavModule, 
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
