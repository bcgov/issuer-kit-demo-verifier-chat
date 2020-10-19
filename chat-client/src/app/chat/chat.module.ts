import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
