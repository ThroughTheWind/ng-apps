import { Component, OnInit, Input } from '@angular/core';
import { AbstractForm } from '../abstract-form';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Register } from '../../../models/register.interface';
import { ValidateEmail, ValidatePassword, MatchField } from '../../../utils/form-validators';

@Component({
  selector: 'lib-register-step1-form',
  templateUrl: './register-step1-form.component.html',
  styleUrls: ['./register-step1-form.component.scss']
})
export class RegisterStep1FormComponent extends AbstractForm<Register> implements OnInit {

  @Input() subForm: FormGroup;

  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  ngOnInit() {
    this.initControls();
    super.ngOnInit();
  }

  initControls() {
    this.email = new FormControl('', [Validators.required, ValidateEmail]);
    this.password = new FormControl('', [Validators.required, ValidatePassword]);
    this.confirmPassword = new FormControl('', [Validators.required, MatchField('password')]);
  }

  protected getFormGroup(): FormGroup {
    this.subForm.addControl('email', this.email);
    this.subForm.addControl('password', this.password);
    this.subForm.addControl('confirmPassword', this.confirmPassword);
    return this.subForm;
  }

  protected onSubmit(): void {
    throw new Error("Method not implemented.");
  }

}
