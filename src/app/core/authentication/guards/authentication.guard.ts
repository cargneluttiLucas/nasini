import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private _authService: AuthenticationService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.isAuthenticated$.pipe(
      // metdo que usa en el tutorial auth0
      tap(loggedIn => {
        if (!loggedIn) {
          this._authService.login(state.url);
        }
      })
      // metodo que usa naranja 
      // tap((isAuthenticated) => {
      //   if (!isAuthenticated) {
      //     this.router.navigate(['/unauthorized']);
      //     return false;
      //   }
      //   return true;
      // }),
    );
  }
}
