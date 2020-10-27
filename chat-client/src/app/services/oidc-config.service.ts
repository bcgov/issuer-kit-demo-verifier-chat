import { Injectable } from '@angular/core';

import { OpenIdConfiguration } from 'angular-auth-oidc-client';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class OidcConfigService {
  constructor(private configService: ConfigService) { }

  private get appConfig(): any {
    return this.configService.config;
  }

  public get config(): OpenIdConfiguration {
    return {
      autoUserinfo: false,
      clientId: `${this.appConfig.CLIENT_ID}`,
      customParams: {
        kc_idp_hint: `${this.appConfig.KC_IDP_HINT}`,
        pres_req_conf_id: `${this.appConfig.PRES_REQ_CONF_ID}`
      },
      forbiddenRoute: '/',
      maxIdTokenIatOffsetAllowedInSeconds: 10,
      redirectUrl: `${window.location.origin}/home`,
      responseType: 'code',
      scope: 'openid profile vc_authn',
      stsServer: `${this.appConfig.STS_SERVER}/auth/realms/${this.appConfig.REALM}`,
      silentRenew: true,
      silentRenewUrl: `${window.location.origin}/silent-renew-oidc.html`,
      startCheckSession: true,
      postLoginRoute: '/chat',
      postLogoutRedirectUri: `${window.location.origin}`,
      unauthorizedRoute: '/',
    };
  }
}
