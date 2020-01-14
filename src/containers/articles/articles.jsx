import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'throttle-debounce'
import Article from '../../components/article/article'
import Search from '../../components/search/search'
import Alert from '../../components/alert/alert'

class Articles extends PureComponent {
  constructor() {
    super()
    this.state = {
      searchText: '',
      sortBy: 'newest',
    }

    this.findArticles = debounce(500, this.findArticles)
  }

  componentDidMount() {
    const { getArticles } = this.props
    const { searchText, sortBy } = this.state
    getArticles({ searchText, sortBy })
  }

  onChangeInputElement = (evt) => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
    debounce(500, this)
    this.findArticles()
  }

  findArticles = () => {
    const {
      searchText,
      sortBy,
    } = this.state
    const { getArticles } = this.props
    getArticles({ searchText, sortBy })
  }

  render() {
    const {
      articles,
      error,
      reason,
      loader,
    } = this.props
    return (
      <>
        <Search
          onChangeInputElement={this.onChangeInputElement}
        />

        <div className="row py-5 justify-content-md-center">
          <div className="ocl col-md-6 col-xl-6">
            {(error ? <Alert message={reason} /> : '')}
            {loader ? (
              <div className="text-center text-success">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : ''}
            {!loader && (
            <div className={`list-group ${(loader ? 'js-element_hide' : 'js-element_show')}`}>
              {(articles ? <Article articleArray={articles} /> : '')}
            </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Articles

Articles.defaultProps = {
  reason: '',
  error: false,
  lead_paragraph: '',
}

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  loader: PropTypes.bool.isRequired,
  reason: PropTypes.string,
  error: PropTypes.bool,
  lead_paragraph: PropTypes.string,
}
