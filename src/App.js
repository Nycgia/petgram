import React, { useContext, Suspense } from 'react'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './styles/GlobalStyle'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const Favorites = React.lazy(() => import('./pages/Favorites'))
const User = React.lazy(() => import('./pages/User'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default/>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/Favorites' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favorites path='/Favorites' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}

export default App
