import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { VendorsModule } from '../../../../../vendors/src/public-api';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreFormModule } from '../../../../../core/src/public-api';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    VendorsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CoreFormModule
  ]
})
export class AuthModule { }
