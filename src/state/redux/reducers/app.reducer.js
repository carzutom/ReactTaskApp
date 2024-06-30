import { produce } from 'immer'

import * as Actions from '../actions/app.actions'

export const initialState = {
  error: false,
  isLoading: false,
  portal_name: 'React App',
  company_name: 'Soveluss Technologies',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      default:
        return draftState
    }
  })
