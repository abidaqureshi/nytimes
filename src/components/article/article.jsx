import React from 'react'
import { Link } from 'react-router-dom'
import formatDate from '../../utility/functions'
import Config from '../../config'
import '../../containers/articles/style/articles.scss'

const Article = (props) => {
  const { articleArray } = props
  return articleArray.map((article, id) => (
    <Link to={`/article-detail/${id}`} className="list-group-item list-group-item-action flex-column align-items-start" key={new Date().getTime() + Math.random()}>
      <div className="device-responsive w-100 justify-content-between">
        <h5 className="mb-1">
          {article.headline.main}
        </h5>
        <small className="text-muted muted-text-css-padding">
          {formatDate(new Date(article.pub_date.split('T')[0]), 'dmY', '.')}
        </small>
      </div>
      <div className="device-responsive w-100 justify-content-between ">
        <p className="mb-1">
          {article.lead_paragraph}
        </p>
        <span>
          {article.multimedia[0] && (
          <img
            alt=""
            src={`${Config.imageUrl}/${article.multimedia[0].url}`}
            className="w-100 thumbnail"
          />
          )}
        </span>
      </div>
      <small className="text-muted">
        {article.source}
      </small>
    </Link>
  ))
}

export default Article
