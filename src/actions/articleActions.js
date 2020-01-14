/*
Constants and action creators for redux saga
*/

export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES'
export const GET_ARTICLES_BY_NAME = 'GET_ARTICLES_BY_NAME'
export const GET_ARTICLES_DETAILS = 'GET_ARTICLES_DETAILS'
export const RENDER_ARTICLES = 'RENDER_ARTICLES'
export const RENDER_ARTICLE = 'RENDER_ARTICLE'
export const RENDER_ERROR_NOTIFICATION = 'RENDER_ERROR_NOTIFICATION'

export const getArticles = (args = {}) => ({
  type: GET_ALL_ARTICLES,
  data: { ...args },
})

export const getArticlesByName = (args = {}) => ({
  type: GET_ARTICLES_BY_NAME,
  data: { ...args },
})

export const getArticleDetails = (args = '') => ({
  type: GET_ARTICLES_DETAILS,
  data: { ...args },
})
