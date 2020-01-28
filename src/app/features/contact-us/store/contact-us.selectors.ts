import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromcontactUs from './contact-us.reducer';
export const selectContactUsState = createFeatureSelector<fromcontactUs.IContactUs>('contactUs');
export const selectData = createSelector(selectContactUsState, (state: fromcontactUs.IContactUs) => {
  if (state.isFetchCompleted) {
    return state.data;
  }
});
