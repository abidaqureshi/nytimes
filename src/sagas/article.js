import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import Config from '../config'
import {
  GET_ALL_ARTICLES,
  GET_ARTICLES_BY_NAME,
  GET_ARTICLES_DETAILS,
  RENDER_ARTICLES,
  RENDER_ARTICLE,
  RENDER_ERROR_NOTIFICATION,
} from '../actions'

const SERVER_ADDRESS = `${Config.apiBaseUrl}?api-key=${Config.apiKey}`

export function* fetchAllArticles(args) {
  const { searchText, sortBy } = args.data
  console.log('args.data ', args.data)
  try {
    const response = yield axios.get(`${SERVER_ADDRESS}&q=${searchText}&sort=${sortBy}`)
    const { response: { docs } } = response.data
    yield put({ type: RENDER_ARTICLES, payload: { articles: docs } })
  } catch (error) {
    if (!error.response) {
      yield put({
        type: RENDER_ERROR_NOTIFICATION,
        payload: { reason: 'Network Error, Please check your connection!', error: true },
      })
    }
  }
}

export function* fetchArticlesByName(data) {
  try {
    const response = yield axios.get(`${SERVER_ADDRESS}`, {
      ...data,
    })
    yield put({ type: RENDER_ARTICLE, payload: response.data })
  } catch (error) {
    yield put({ type: RENDER_ERROR_NOTIFICATION, payload: error.response.data })
  }
}

export function* fetchArticle(data) {
  try {
    const response = yield axios.get(`${SERVER_ADDRESS}`, {
      ...data,
    })
    yield put({ type: RENDER_ARTICLE, payload: response.data })
  } catch (error) {
    yield put({ type: RENDER_ERROR_NOTIFICATION, payload: error.response.data })
  }
}


export function* watchArticleEvents() {
  yield takeEvery(GET_ALL_ARTICLES, fetchAllArticles)
  yield takeEvery(GET_ARTICLES_BY_NAME, fetchArticlesByName)
  yield takeEvery(GET_ARTICLES_DETAILS, fetchArticle)
}
