import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import TextField from '@material-ui/core/TextField/TextField'
import Search from '@material-ui/icons/Search'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shortenUrl } from '../redux/Actions'

const mapDispatchToProps = dispatch => {
  return {
    shortenUrl: url => {
      dispatch(shortenUrl(url))
    },
  }
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
    return (
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
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchComp)
