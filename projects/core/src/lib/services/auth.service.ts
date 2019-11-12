import { Injectable, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EnvConfigService } from '../core.module';
import { EnvConfig } from '../models/env-config';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';

const KEYS = {
  USER: 'USER'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, 
    @Inject(EnvConfigService) private envConfig: EnvConfig
  ) {
    this.subscribeAuthState();
  }

  /**
   * Checks wether the user is logged in
   */
  public isLoggedIn(): boolean {
    const localUser = localStorage.getItem(`${this.envConfig.appLocalStorageKey}_${KEYS.USER}`);
    return localUser ? (JSON.parse(localUser) ? true : false) : false;
  }

  /**
   * Log in with user & password
   * @param login Wrapper containing logging informations
   * @returns Observable<boolean> true if login is successfull
   */
  public logInWithEmail(login: Login): Observable<boolean> {
    const authObservable = from(this.afAuth.auth.signInWithEmailAndPassword(login.email, login.password));
    return authObservable.pipe(
      map(user => {
        if(user) {
          this.rememberMe(login.rememberMe);
          return true;
        }
        return false;
      })
    );
  }

  /**
   * Log out the connected user
   */
  public logOut() {
    from(this.afAuth.auth.signOut())
      .subscribe(() => localStorage.removeItem(`${this.envConfig.appLocalStorageKey}_${KEYS.USER}`));
  }

  private subscribeAuthState() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem(`${this.envConfig.appLocalStorageKey}_${KEYS.USER}`, JSON.stringify(user));
      } else {
        localStorage.removeItem(`${this.envConfig.appLocalStorageKey}_${KEYS.USER}`);
      }
    });
  }

  private rememberMe(value: boolean) {
    if(value) {
      this.afAuth.auth.setPersistence('local');
    } else {
      this.afAuth.auth.setPersistence('session');
    }
  }
}
