import {
  GET_ALL_ARTICLES,
  GET_ARTICLES_BY_NAME,
  RENDER_ARTICLE,
  RENDER_ARTICLES,
  RENDER_ERROR_NOTIFICATION,
} from '../../actions'


const initalState = {

  articles: [],
  article: {},
  error: false,
  reason: '',
  loader: false,

}

const articleReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES || GET_ARTICLES_BY_NAME:
      return {
        ...state,
        loader: true,
      }

    case RENDER_ARTICLES:
      return {
        ...state,
        ...action.payload,
        loader: false,
      }
    case RENDER_ARTICLE:
      return {
        ...state,
        ...action.payload,
        loader: false,
      }
    case RENDER_ERROR_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
        loader: false,
      }
    default:
      return state
  }
}

export default articleReducer
