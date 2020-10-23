import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {
  form = this.fb.group({
    agree: [null, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  submit(): void {
    this.auth.login();
  }
}
