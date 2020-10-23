import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chat-client';

  constructor(private translate: TranslateService, private oidcSecurityService: OidcSecurityService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
      console.warn('app authenticated', isAuthenticated);
      const at = this.oidcSecurityService.getToken();
      console.warn(at);
    });
  }

  toggleLanguage(): void {
    const curr = this.translate.currentLang;
    this.translate.use(curr === 'en' ? 'fr' : 'en');
  }
}
