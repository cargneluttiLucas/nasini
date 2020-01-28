import { Action } from '@ngrx/store';

export enum ContactUsActionsTypes {
  FETCH_PENDING = '[CONTACTUS: PENDING]',
  FETCH_FULFILLED = '[CONTACTUS:  FULFILLED] Last',
  FETCH_ERROR = '[CONTACTUS: ERROR]  Last',
  CLEAR_DATA = '[CONTACTUS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = ContactUsActionsTypes.FETCH_PENDING;
  constructor(public payload: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = ContactUsActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = ContactUsActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = ContactUsActionsTypes.CLEAR_DATA;
}

export type ContactUsActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
