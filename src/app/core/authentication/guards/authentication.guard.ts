import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

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
    return this._authService.isLoggedIn$.pipe(
      debounceTime(400),
      tap((isAuthenticated) => {
        console.error(isAuthenticated)
        if (!isAuthenticated) {
          this.router.navigate(['/unauthorized']);
          return false;
        }
        return true;
      }),
    );
  }
}
