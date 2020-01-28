
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { NavigatorService } from '../shared/services';
@Injectable()
export class RootEffects {

  constructor(
    private actions$: Actions,
    private _navigatorService: NavigatorService,
  ) { }
}
