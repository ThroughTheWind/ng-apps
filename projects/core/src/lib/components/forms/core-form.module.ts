import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorsModule } from '../../../../../vendors/src/public-api';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        VendorsModule,
        ReactiveFormsModule
    ],
    exports: [
        
    ]
})
export class CoreFormModule {}