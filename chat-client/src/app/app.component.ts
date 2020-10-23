import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { from, Observable, of, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from './services/auth.service';
import { FeathersService } from './services/feathers.service';

import * as hash from 'object-hash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private oidcSubscriptoion: Subscription;

  title = 'chat-client';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private auth: AuthService,
    private feathers: FeathersService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.oidcSubscriptoion = this.auth.checkAuth()
      .pipe(
        filter((authenticated: boolean) => Boolean(authenticated)),
        switchMap(() => this.auth.userData$),
        switchMap((data: any) => {
          const { given_names, family_name, street_address, locality, region, postal_code } = data;

          if (!(given_names || family_name || street_address || locality || region || postal_code)) {
            this.auth.logout();
          }

          const params = {
            firstName: given_names,
            lastName: family_name,
            address: street_address,
            city: locality,
            province: region,
            postalCode: postal_code
          };

          const id = hash(params);

          return from(this.feathers.service('users')
            .get(id)
            .then((user) => user)
            .catch(() => this.feathers.service('users')
              .create({ id, ...params })
            ));
        }),
        tap(() => this.router.navigateByUrl('/chat'))
      )
      .subscribe();
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
