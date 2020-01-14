import { all } from 'redux-saga/effects'
import { watchArticleEvents } from './article'

export default function* rootSaga() {
  yield all([watchArticleEvents()])
}
