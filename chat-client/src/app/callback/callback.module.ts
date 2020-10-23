import { NgModule } from '@angular/core';

import { CallbackRoutingModule } from './callback-routing.module';

import { SharedModule } from '../shared/shared.module';

import { CallbackComponent } from './components/callback/callback.component';


@NgModule({
  declarations: [CallbackComponent],
  imports: [
    CallbackRoutingModule,
    SharedModule
  ]
})
export class CallbackModule { }
