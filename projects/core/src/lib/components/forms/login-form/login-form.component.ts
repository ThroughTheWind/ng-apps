import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '../../../utils/form-validators';
import { AuthService } from '../../../../public-api';
import { Login } from '../../../models/login';

export abstract class LoginFormComponent implements OnInit {

  protected loginForm: FormGroup;
  protected invalidCredentials = false;

  protected get email() {return this.loginForm.get('email'); }
  protected get password() {return this.loginForm.get('password'); }
  protected get rememberMe() {return this.loginForm.get('rememberMe'); }


  constructor(protected fb: FormBuilder, protected authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.getFormGroup();
  }

  protected getFormGroup(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, ValidateEmail]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  protected onSubmit() {
    this.authService.logInWithEmail(this.loginForm.value as Login)
      .subscribe(
        isLoggedIn => {
          this.invalidCredentials = !isLoggedIn;
          this.afterSubmit(isLoggedIn);
        }, () => {
          this.invalidCredentials = true;
          this.afterSubmit(false);
        }
      );
  }

  abstract afterSubmit(loggedIn: boolean);

}
