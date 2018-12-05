import * as ActionTypes from './ActionTypes'

export const Reducer = (
  state = {
    requestLink: '',
    receivedLink: '',
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.REQUEST_URL:
      return {
        ...state,
        requestLink: action.payload
      }
    case ActionTypes.RESP_URL:
      return {
        ...state,
        receivedLink: action.payload
      }
    default:
      return state
  }
}
