import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';


export const emailRegEx
= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//8 caracters, with 1 upper/lower case, 1 special caracter
const passwordRegEx = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;

export function ValidateEmail(control: AbstractControl) {
    return emailRegEx.test(control.value) ? null : {validEmail: true};
}

export function ValidatePassword(control: AbstractControl) {
    return passwordRegEx.test(control.value) ? null : {validPassword: true};
}

// custom validator to check that a field value match another one
export function MatchField(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if(!control.parent || !control.parent.controls[controlName]) return null;
        const matchControl = control.parent.controls[controlName];
        if(matchControl.errors && !matchControl.errors.matchField) {
            return null;
        }
        if (control.value !== matchControl.value) {
            return { 'matchField': true };
        }
        return null;
    };
}