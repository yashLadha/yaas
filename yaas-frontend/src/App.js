import React, { Component } from 'react'
import { ConfigureStore } from './redux/Store'
import { Provider } from 'react-redux'
import SearchComp from './Components/SearchComp'

const Store = ConfigureStore()

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div
          style={{
            maxWidth: '720px',
            margin: '32px auto',
          }}
        >
          <SearchComp />
        </div>
      </Provider>
    )
  }
}

export default App
