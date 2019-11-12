import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { FirebaseOptionsToken, AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { EnvConfig } from './models/env-config';

import { VendorsModule } from '../../../vendors/src/public-api';
import { CoreFormModule } from './components/forms/core-form.module';

export const EnvConfigService = new InjectionToken<EnvConfig>("EnvConfig");

@NgModule({
  declarations: [],
  imports: [
    VendorsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CoreFormModule
  ],
  exports: []
})
export class CoreModule {
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: FirebaseOptionsToken, 
          useValue: environment.firebase
        }, {
          provide: EnvConfigService,
          useValue: environment.configuration
        }
      ]
    }
  }
}
