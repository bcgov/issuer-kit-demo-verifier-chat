import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config = {};

  public get config(): any {
    return this._config;
  }

  public set config(c: any) {
    this._config = c;
  }

  asyncSetConfig(input: Promise<any>): Promise<any> {
    return input.then(config => this.config = config);
  }
}
