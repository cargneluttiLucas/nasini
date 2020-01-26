import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nasini-angular';

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getUser$().subscribe((data) => {
      console.log('estoy probando ver usuario', data);
    });
  }
}
