import { ContactUsActions, ContactUsActionsTypes } from './contact-us.actions';

export interface IContactUs {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IContactUs = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: ContactUsActions): IContactUs {
  switch (action.type) {
    case ContactUsActionsTypes.FETCH_PENDING:
      return { ...state, pending: true, data: action.payload };

    case ContactUsActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case ContactUsActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        data: null,
      };

    case ContactUsActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
