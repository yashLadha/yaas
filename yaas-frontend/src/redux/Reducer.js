import * as ActionTypes from './ActionTypes'

export const Reducer = (
  state = {
    initStatus: false,
    requestLink: '',
    receiveStatus: false,
    receivedLink: '',
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.REQUEST_URL:
      return {
        ...state,
        requestLink: action.payload,
        initStatus: true,
        receiveStatus: false,
      }
    case ActionTypes.RESP_URL:
      return {
        ...state,
        receivedLink: action.payload,
        initStatus: false,
        receiveStatus: true,
      }
    default:
      return state
  }
}
