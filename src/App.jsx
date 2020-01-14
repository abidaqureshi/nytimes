import React, { PureComponent, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layouts/layout'
import {
  HomePageComponent,
  ArticeDetailComponent,
} from './containers'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Route exact path="/" component={HomePageComponent} />
            <Route path="/article-detail/:id" component={ArticeDetailComponent} />
          </Layout>
        </Suspense>
      </Router>
    )
  }
}

export default App
