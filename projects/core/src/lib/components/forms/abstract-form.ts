import { OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder } from '@angular/forms';


export abstract class AbstractForm<T> implements OnInit {

    form: FormGroup;

    constructor(protected fb: FormBuilder) {}

    protected get isValid() {
        return this.form.valid;
    }

    ngOnInit(): void {
        this.form = this.getFormGroup();
    }

    protected abstract getFormGroup(): FormGroup;

    protected abstract onSubmit(): void;

    protected getFormValue(): T {
        return this.form.value as T;
    }
}