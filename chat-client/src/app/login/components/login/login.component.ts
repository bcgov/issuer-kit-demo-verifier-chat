import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import * as faker from 'faker/locale/en_CA';
import * as uuid from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  messages: string[] = [];

  form = this.fb.group({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    province: faker.address.state(),
    postalCode: faker.address.zipCode(),
    email: faker.internet.email(),
    password: uuid.NIL
  });

  constructor(private fb: FormBuilder) { }

  signup() { }
}
