import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

class Navigations extends PureComponent {
  render() {
    const { location: { pathname } } = this.props
    return (
      <nav>
        {pathname !== '/' ?
          (
            <Link to="/">
            Back to home
            </Link>
          ) : ''}

      </nav>
    )
  }
}

export default withRouter(Navigations)

Navigations.propTypes = {
  location: PropTypes.string.isRequired,
}
