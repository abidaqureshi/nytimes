import { connect } from 'react-redux'
import Articles from './articles'
import {
  getArticles,
} from '../../actions'

const mapStateToProps = (state) => ({
  articles: state.article.articles,
  error: state.article.error,
  reason: state.article.reason,
  loader: state.article.loader,
})

const mapDispatchToProps = (dispatch) => ({
  getArticles: (obj) => dispatch(getArticles(obj)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles)
