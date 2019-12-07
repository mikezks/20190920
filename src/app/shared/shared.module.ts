import { NgModule } from '@angular/core';
import { OrtPipe } from './pipes/ort.pipe';
import { CommonModule } from '@angular/common';
import { NumberMinDirective } from './validation/number-min.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrtPipe,
    NumberMinDirective
  ],
  exports: [
    OrtPipe,
    NumberMinDirective
  ]
})
export class SharedModule {}
