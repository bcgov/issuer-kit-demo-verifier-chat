import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {
  form = this.fb.group({
    agree: [null, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  agree(): void {
    this.router.navigateByUrl('/home');
  }
}
