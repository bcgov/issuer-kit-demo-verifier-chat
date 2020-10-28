import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import * as faker from 'faker/locale/en_CA';
import * as uuid from 'uuid';

import { AuthService } from '@app/services/auth.service';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  messages: string[] = [];

  form = this.fb.group({
    firstName: null,
    lastName: null,
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    province: null,
    postalCode: faker.address.zipCode(),
    email: faker.internet.email(),
    password: uuid.NIL
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  enter(): void {
    this.router.navigateByUrl('/chat');
  }

  public get userData$(): any {
    return this.auth.userData$
      .pipe(
        tap((data: any) => {
          this.form.get('firstName').patchValue(data.given_name);
          this.form.get('lastName').patchValue(data.family_name);
          this.form.get('province').patchValue(data.region);
        })
      );
  }

}

