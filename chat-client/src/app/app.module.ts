import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';

import { ConfigService } from './services/config.service';
import { OidcConfigService as ChatOidcConfigService } from './services/oidc-config.service';

import { SharedModule } from './shared/shared.module';

import { httpInterceptorProviders } from './interceptors';
import { HomeComponent } from './components/home/home.component';

export const OidcInitializerFactory = (
  configService: ConfigService,
  chatOidcConfigService: ChatOidcConfigService,
  oidcConfigService: OidcConfigService
) => {
  return () => {
    return configService.asyncSetConfig(import('../assets/config.json'))
      .then(() => oidcConfigService.withConfig(chatOidcConfigService.config));
  };
};

export const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
};

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent,
    SettingsMenuComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: OidcInitializerFactory,
      multi: true,
      deps: [
        ConfigService,
        ChatOidcConfigService,
        OidcConfigService
      ],
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
