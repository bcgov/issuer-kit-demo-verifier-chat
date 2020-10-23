import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private conf = {};

  public get config(): any {
    return this.conf;
  }

  public set config(c: any) {
    this.conf = c;
  }

  asyncSetConfig(input: Promise<any>): Promise<any> {
    return input.then(config => this.config = config);
  }
}
