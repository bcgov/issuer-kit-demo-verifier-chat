import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  processTokenPayload(payload: any): any {
    const { given_names, family_name, street_address, locality, region, postal_code } = payload;

    return {
      firstName: given_names,
      lastName: family_name,
      address: street_address,
      city: locality,
      province: region,
      postalCode: postal_code
    };
  }
}
