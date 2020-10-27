import { Injectable } from '@angular/core';

import { FeathersService } from './feathers.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private feathers: FeathersService) { }

  messages$(): any {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (this.feathers.service('messages') as any)
      .watch()
      .find({
        query: {
          $sort: { createdAt: +1 },
          $limit: 50
        }
      });
  }

  users$(): any {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (this.feathers.service('users') as any)
      .watch()
      .find();
  }

  sendMessage(message: string, user: any): void {
    if (message === '') {
      return;
    }

    // feathers-reactive Observables are hot by default,
    // so we don't need to subscribe to make create() happen.
    this.feathers
      .service('messages')
      .create({
        text: message,
        user
      });
  }
}
