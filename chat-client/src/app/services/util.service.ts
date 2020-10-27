import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  processTokenPayload(payload: any): any {
    const { given_names, given_name, family_name, region } = payload;

    return {
      firstName: given_names || given_name,
      lastName: family_name,
      province: region,
    };
  }
}
