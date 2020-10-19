import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import * as feathers from '@feathersjs/feathers';
import * as feathersSocketIOClient from '@feathersjs/socketio-client';
import * as feathersAuthClient from '@feathersjs/authentication-client';

@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private _feathers = feathers();
  private _socket = io('http://localhost:3030');

  constructor() {
    this._feathers
      .configure(feathersSocketIOClient(this._socket))
      .configure(feathersAuthClient.default({
        storage: window.sessionStorage
      }))
      .configure(feathersRx({
        idField: '_id'
      }));
  }

  public service(name: string) {
    return this._feathers.service(name);
  }

  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logout() {
    return this._feathers.logout();
  }
}
