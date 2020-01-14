import { connect } from 'react-redux'
import ArticleDetail from './articleDetails'

const mapStateToProps = (state) => ({
  articles: state.article.articles,
  error: state.article.error,
  reason: state.article.reason,
  loader: state.article.loader,
})

export default connect(
  mapStateToProps, null,
)(ArticleDetail)
