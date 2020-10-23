import { Injectable } from '@angular/core';

import { OpenIdConfiguration } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class OidcConfigService {
  private conf: OpenIdConfiguration = {
    autoUserinfo: false,
    clientId: 'chat-client',
    customParams: {
      kc_idp_hint: 'vc-authn',
      pres_req_conf_id: 'verified-email'
    },
    forbiddenRoute: '/',
    maxIdTokenIatOffsetAllowedInSeconds: 10,
    redirectUrl: `${window.location.origin}/home`,
    responseType: 'code',
    scope: 'openid profile vc_authn',
    stsServer: 'http://localhost:8180/auth/realms/vc-authn',
    silentRenew: true,
    silentRenewUrl: `${window.location.origin}/silent-renew-oidc.html`,
    startCheckSession: true,
    postLoginRoute: '/home',
    postLogoutRedirectUri: `${window.location.origin}`,
    unauthorizedRoute: '/',
  };

  public get config(): any {
    return this.conf;
  }
}
