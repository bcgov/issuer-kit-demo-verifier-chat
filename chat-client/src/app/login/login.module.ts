import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
