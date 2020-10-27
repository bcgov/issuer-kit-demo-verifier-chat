import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import * as feathers from '@feathersjs/feathers';
import * as feathersSocketIOClient from '@feathersjs/socketio-client';
import * as feathersAuthClient from '@feathersjs/authentication-client';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private conf = this.configService.config;

  private client = feathers();
  private socket = io(`${this.conf.CHAT_SERVER || 'http://localhost:3030'}`);

  constructor(private configService: ConfigService) {
    this.client
      .configure(feathersSocketIOClient(this.socket))
      .configure(feathersAuthClient.default({
        storage: window.sessionStorage
      }))
      .configure(feathersRx({
        idField: '_id'
      }));
  }

  public service(name: string): any {
    return this.client.service(name);
  }

  // DEPRECATED
  public authenticate(credentials?): Promise<any> {
    return this.client.authenticate(credentials);
  }
}
