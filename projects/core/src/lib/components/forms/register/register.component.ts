import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AbstractForm } from '../abstract-form';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() formStyle: string = 'default';

  @ViewChild(MatStepper, {static: false})
  stepper: MatStepper;

  formLogin: FormGroup;
  formUserInfos: FormGroup;

  stepIndex = 0;
  isLinear = true;
  loginCompleted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormGroups();
  }

  initFormGroups(): void {
    this.formLogin = this.fb.group({});
    this.formUserInfos = this.fb.group({});
  }

}
