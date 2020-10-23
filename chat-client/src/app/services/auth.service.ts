import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private oidcSecurityService: OidcSecurityService) { }

  /**
   * login
   */
  public login(): void {
    this.oidcSecurityService.authorize();
  }

  /**
   * logout
   */
  public logout(): void {
    this.oidcSecurityService.logoff((redirect: string) => this.router.navigateByUrl(redirect));
  }

  public get isAuthenticated$(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated$;
  }

  public get token(): string {
    return this.oidcSecurityService.getToken();
  }
}
