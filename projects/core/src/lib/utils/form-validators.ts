import { AbstractControl } from '@angular/forms';


export const emailRegEx
= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function ValidateEmail(control: AbstractControl) {
    return emailRegEx.test(control.value) ? null : {validEmail: true};
}