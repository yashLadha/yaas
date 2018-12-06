import * as ActionTypes from './ActionTypes'
import fetch from 'cross-fetch'
import { SHORT_URL } from './Shared'

export const requestShortenURL = url => ({
  type: ActionTypes.REQUEST_URL,
  payload: url,
})

export const successShortenURL = url => ({
  type: ActionTypes.RESP_URL,
  payload: url,
})

export const shortenUrl = url => dispatch => {
  dispatch(requestShortenURL(url))
  // Shorten the URL using api call
  fetch(SHORT_URL + 'short', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ origURL: url }),
  })
    .then(response => response.json())
    .then(resp => {
      if (resp.shortURLCode) {
        dispatch(successShortenURL(SHORT_URL + resp.shortURLCode))
      }
    })
    .catch(err => console.log(err))
}
