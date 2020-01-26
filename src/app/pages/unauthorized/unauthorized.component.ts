import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';

@Component({
  selector: 'app-login-unauthorized',
  styles: [
    `
    :host {
      align-items: center;
      display: flex;
      flex: 1;
      height: 100%;
      justify-content: center;
    }
    `,
  ],
  template: `
    <p class="subtitle center-xxs margin-top-32 margin-bottom-32">  {{ 'PAGES.UNAUTHORIZED' | translate }} </p>
  `,
})
export class UnauthorizedComponent implements OnInit {
  constructor(private _authService: AuthenticationService) {}

  ngOnInit() {
    console.log('entre a unauthorized para rediriguir a login');
    this._authService.login();
  }
}
