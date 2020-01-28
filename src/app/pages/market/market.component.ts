import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/services/authentication.service';


@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
    constructor( public auth: AuthenticationService) { }

    ngOnInit() {
        console.log('entre a market');
        this.auth.getUser$().subscribe((data) => {
            console.log('Usuario en market: ', data);
        });
        this.auth.userProfile$.subscribe((data) => {
            console.log('perfil en market: ', data);
        });
    }
}
