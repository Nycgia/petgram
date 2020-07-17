import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'

const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategory />
    <ListOfPhotoCard categoryId={2} />
  </>
)

export default App
