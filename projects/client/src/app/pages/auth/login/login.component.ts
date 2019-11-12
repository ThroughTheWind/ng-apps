import { Component, OnInit } from '@angular/core';
import { LoginFormComponent, AuthService } from '../../../../../../core/src/public-api';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginFormComponent implements OnInit {

  constructor(protected fb: FormBuilder, protected authService: AuthService, private router: Router) {
    super(fb, authService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  afterSubmit(loggedIn: boolean) {
    if(loggedIn) this.router.navigate(['home']);
  }

}
