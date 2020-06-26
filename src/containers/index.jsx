import { lazy } from 'react'

const HomePageComponent = lazy(() => (import('../components/home/homePage')))
const ArticlesComponent = lazy(() => (import('./articles/articlesContainer')))
const ArticeDetailComponent = lazy(() => (import('./articleDetails/articleDetailsContainer')))

export {
  HomePageComponent,
  ArticlesComponent,
  ArticeDetailComponent,
}
