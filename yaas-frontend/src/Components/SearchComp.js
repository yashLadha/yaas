import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import TextField from '@material-ui/core/TextField/TextField'
import Search from '@material-ui/icons/Search'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shortenUrl } from '../redux/Actions'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    shortenUrl: url => {
      dispatch(shortenUrl(url))
    },
  }
}

const MessageDisplay = ({ receivedLink }) => {
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        margin: '0 auto',
        padding: '32px',
      }}
    >
      <a href={receivedLink}>{receivedLink}</a>
    </div>
  )
}

class SearchComp extends Component {
  state = {
    url: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.shortenUrl(this.state.url)
  }

  render() {
    let shortenedLink = <div />
    if (this.props.receiveStatus) shortenedLink = <MessageDisplay receivedLink={this.props.receivedLink} />

    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            style={{ width: '100%' }}
            value={this.state.url}
            onChange={this.handleChange('url')}
            variant="outlined"
            label="URL"
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
        {shortenedLink}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComp)
