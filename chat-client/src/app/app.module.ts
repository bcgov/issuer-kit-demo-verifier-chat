import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

import { ConfigService } from '@app/services/config.service';

export const appInitializerFn = (configService: ConfigService) => {
  return () => {
    return configService.asyncSetConfig(import('../assets/config.json'));
  };
};

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
