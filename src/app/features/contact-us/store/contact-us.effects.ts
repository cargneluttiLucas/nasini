import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ContactUsActionsTypes } from './contact-us.actions';
import { ContactUsService } from '../services/contact-us.service';

@Injectable()
export class ContactUsEffects {
  constructor(private actions$: Actions,
              private contactUs: ContactUsService) {}

  @Effect() postPayment$ = this.actions$.pipe(ofType(ContactUsActionsTypes.FETCH_PENDING)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => {
      return this.contactUs.postQuery(payload.data).pipe(
        map(response => ({ type: ContactUsActionsTypes.FETCH_FULFILLED, payload: response })),
        catchError((err: HttpErrorResponse) => of({ type: ContactUsActionsTypes.FETCH_ERROR, payload: err })),
      );
    }),
  );
}
