import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[min]:not([ngxMinDisabled])',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberMinDirective,
      multi: true
    }
  ]
})
export class NumberMinDirective implements Validator {
  private _min: number;
  @Input() set min(value: number) {
    this._min = +value;
  }
  get min() {
    return this._min;
  }
  
  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('validate', control.value, this.min);
    if (control && control.value < this.min) {
      return {
        min: {
          actualValue: control.value,
          min: this.min
        }
      };
    }

    return null;
  }
}
