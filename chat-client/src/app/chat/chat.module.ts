import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ChatComponent } from './components/chat/chat.component';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [ChatComponent, EntryComponent],
  imports: [
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
