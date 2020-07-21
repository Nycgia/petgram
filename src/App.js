import React from 'react'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'

const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:detailId' />
    </Router>
    <NavBar />
  </>
)

export default App
