import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorsModule } from '../../../../../vendors/src/public-api';
import { RegisterComponent } from './register/register.component';
import { RegisterStep1FormComponent } from './register-step1-form/register-step1-form.component';
import { RegisterStep2FormComponent } from './register-step2-form/register-step2-form.component';


@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterComponent,
        RegisterStep1FormComponent,
        RegisterStep2FormComponent,
    ],
    imports: [
        CommonModule,
        VendorsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginFormComponent,
        RegisterComponent
    ]
})
export class CoreFormModule {}