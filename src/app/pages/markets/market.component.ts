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
    }
}
