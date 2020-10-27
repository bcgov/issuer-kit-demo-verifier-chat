import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { from, Observable, Subscription } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

import { AuthService } from './services/auth.service';
import { FeathersService } from './services/feathers.service';
import { UtilService } from './services/util.service';

import * as hash from 'object-hash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private oidcSubscription: Subscription;

  title = 'chat-client';
  loading = true;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private auth: AuthService,
    private feathers: FeathersService,
    private util: UtilService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.oidcSubscription = this.auth.checkAuth()
      .pipe(
        filter((authenticated: boolean) => Boolean(authenticated)),
        tap(() => this.router.navigateByUrl('/chat')),
        switchMap(() => this.auth.userData$),
        switchMap((data: any) => {
          const params = this.util.processTokenPayload(data);

          if (!(params.firstName && params.lastName && params.province)) {
            this.auth.logout();
          }

          const id = hash(params);

          return from(this.feathers.service('users')
            .get(id)
            .then((user) => user)
            .catch(() => this.feathers.service('users')
              .create({ id, ...params })
            )
            .catch(() => this.auth.logout()));
        })
      )
      .subscribe({
        next: () => this.loading = false,
        complete: () => this.loading = false
      });
  }

  ngOnDestroy(): void {
    this.oidcSubscription.unsubscribe();
  }

  toggleLanguage(): void {
    const curr = this.translate.currentLang;
    this.translate.use(curr === 'en' ? 'fr' : 'en');
  }

  public get isAuthenticated$(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}
