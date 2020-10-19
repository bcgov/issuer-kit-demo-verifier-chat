import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FeathersService } from './feathers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private feathers: FeathersService) { }

  /**
   * login
   */
  public login(credentials?): Promise<any> {
    return this.feathers.authenticate(credentials);
  }

  /**
   * logout
   */
  public logout() {
    this.feathers.logout();
    this.router.navigateByUrl('/');
  }
}
