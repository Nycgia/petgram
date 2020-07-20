import React from 'react'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </>)
}

export default App
