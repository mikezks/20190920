import { NgModule } from '@angular/core';
import { OrtPipe } from './pipes/ort.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrtPipe
  ],
  exports: [
    OrtPipe
  ]
})
export class SharedModule {}
