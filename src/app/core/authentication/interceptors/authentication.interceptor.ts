import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { flatMap, catchError, concatMap } from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  _authService;

  constructor (
    private injector: Injector,
  ) {
    this._authService = this.injector.get(AuthenticationService);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._authService.isAuthenticated$.pipe(
      concatMap((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return this._authService.getToken$().pipe(
            flatMap<any, HttpEvent<any>>((accessToken) => {
              if (!accessToken) {
                return next.handle(req);
              }

              const request = req.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              });
              return next.handle(request);
            }),
          );
        }
        // If not authenticated, return same req
        return next.handle(req);
      }),
      catchError((err) => {
        return next.handle(req);
      }),
    );
  }
}
