import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {
  form = this.fb.group({
    agree: [null, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder, private oidcSecurityService: OidcSecurityService) { }

  submit(): void {
    this.oidcSecurityService.authorize();
  }
}
