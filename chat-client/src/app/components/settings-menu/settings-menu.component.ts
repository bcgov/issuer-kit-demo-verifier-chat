import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {
  constructor(private router: Router, private auth: AuthService) { }

  login(): void {
    this.router.navigateByUrl('/');
  }

  logout(): void {
    this.auth.logout();
  }
}
