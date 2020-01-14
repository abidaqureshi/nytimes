import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/layout.scss'
import Header from '../header/header'
import Footer from '../footer/footer'


const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <main role="main">
        <section>
          <div className="container-fluid">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}
