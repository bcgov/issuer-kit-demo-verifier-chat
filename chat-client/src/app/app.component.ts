import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { Observable, Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private oidcSubscriptoion: Subscription;

  title = 'chat-client';

  constructor(private router: Router, private translate: TranslateService, private auth: AuthService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.oidcSubscriptoion = this.auth.checkAuth()
      .subscribe((authenticated: boolean) => {
        if (authenticated) {
          this.router.navigateByUrl('/chat');
        }
      });
  }

  ngOnDestroy(): void {
    this.oidcSubscriptoion.unsubscribe();
  }

  toggleLanguage(): void {
    const curr = this.translate.currentLang;
    this.translate.use(curr === 'en' ? 'fr' : 'en');
  }

  public get isAuthenticated$(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}
