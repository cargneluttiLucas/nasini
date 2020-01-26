import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor( public auth: AuthenticationService) { }

    ngOnInit() {
        console.log('entre a home');
        this.auth.getUser$().subscribe((data) => {
            console.log('Usuario en home: ', data);
        });
        this.auth.userProfile$.subscribe((data) => {
            console.log('perfil en home: ', data);
        });
    }
}
