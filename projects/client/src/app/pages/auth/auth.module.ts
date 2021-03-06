import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { VendorsModule } from '../../../../../vendors/src/public-api';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    VendorsModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
