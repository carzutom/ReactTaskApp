import { produce } from 'immer'

import * as Actions from '../actions/contact.actions'

export const initialState = {
  error: false,
  isLoading: true,
  list: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case Actions.CONTACTS_RETRIEVED: {
        draftState.list = action.contacts

        break
      }
      case Actions.TOGGLE_LOADING: {
        draftState.isLoading = action.loading

        break
      }
      default:
        return draftState
    }
  })
