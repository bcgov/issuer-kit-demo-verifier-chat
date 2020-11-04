import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import * as feathers from '@feathersjs/feathers';
import * as feathersSocketIOClient from '@feathersjs/socketio-client';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private _config: any = this.configService.config;
  private _client: feathers.Application<any> = feathers();
  private _socket: SocketIOClient.Socket;

  constructor(private configService: ConfigService) {
    this.client.configure(feathersRx({ idField: '_id' }));
  }

  private get client(): feathers.Application<any> {
    return this._client;
  }

  private get config(): any {
    return this._config;
  }

  private get socket(): SocketIOClient.Socket {
    return this._socket;
  }

  private set socket(s: SocketIOClient.Socket) {
    this._socket = s;
  }

  public service(name: string): any {
    return this.client.service(name);
  }

  public connect(token: string) {
    if (this.socket) {
      return;
    }
    this.socket = io(`${this.config.CHAT_SERVER || 'http://localhost:3030'}`, { query: { token } });
    this.client.configure(feathersSocketIOClient(this.socket))
  }
}
