import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateCity(control: AbstractControl): ValidationErrors | null {
    const validCities = [
        'Graz',
        'Hamburg'
    ];

    if (control && validCities.indexOf(control.value) === -1) {
        return {
            city: {
                actualCity: control.value,
                validCities
            }
        };
    }

    return null;
}

export function validateCityWithParam(validCities: string[]): ValidatorFn {

    return (control: AbstractControl) => {
        if (control && validCities.indexOf(control.value) === -1) {
            return {
                city: {
                    actualCity: control.value,
                    validCities
                }
            };
        }

        return null;
    };
}
