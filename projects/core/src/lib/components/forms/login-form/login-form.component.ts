import { OnInit, Output, EventEmitter, Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from '../../../utils/form-validators';
import { AuthService } from '../../../../public-api';
import { Login } from '../../../models/login';

@Component({
  selector: 'lib-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  invalidCredentials = false;
  @Output() submitted = new EventEmitter<boolean>();
  @Input() formStyle: string = 'default'; 

  get email() {return this.loginForm.get('email'); }
  get password() {return this.loginForm.get('password'); }
  get rememberMe() {return this.loginForm.get('rememberMe'); }


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
    this.authService.logInWithEmail(this.loginForm.value as Login, )
      .subscribe(
        isLoggedIn => {
          this.invalidCredentials = !isLoggedIn;
          this.submitted.emit(isLoggedIn);
        }, () => {
          this.invalidCredentials = true;
          this.submitted.emit(false);
        }
      );
  }
}
