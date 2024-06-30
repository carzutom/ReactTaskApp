import { produce } from 'immer'

import * as Actions from '../actions/task.actions'

export const initialState = {
  error: false,
  isLoading: false,
  list: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case Actions.TASK_CREATED: {
        draftState.list = [...draftState.list, action.task]

        break
      }
      default:
        return draftState
    }
  })
