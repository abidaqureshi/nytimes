/* eslint-disable camelcase */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Config from '../../config'

class ArticleDetail extends PureComponent {
  render() {
    const { match: { params }, articles } = this.props
    const articleId = params.id
    let article = []
    /*
      If articleId exist load the details
      else redirects to home page
    */
    if (articles[articleId]) {
      article = articles[articleId]
    } else {
      return (<Redirect to="/" />)
    }
    const { headline, multimedia, lead_paragraph } = article
    return (
      <div className="row justify-content-sm-center justify-content-lg-center">
        <div className="center-contents col-sm-12 col-lg-12">
          <h4>
            {headline.name}
          </h4>
          <p>
            {multimedia[0] && (
            <img
              alt=""
              src={`${Config.imageUrl}/${article.multimedia[0].url}`}
              className="w-50 thumbnail"
            />
            )}
          </p>
          <p className="col-sm-12 col-lg-12">
            {lead_paragraph}
          </p>

        </div>
      </div>
    )
  }
}
export default ArticleDetail

ArticleDetail.propTypes = {
  match: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  lead_paragraph: PropTypes.string.isRequired,
}
