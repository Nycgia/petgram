import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'

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
          : <>
            <ListOfCategory />
            <ListOfPhotoCard categoryId={2} />
          </>
      }
    </>)
}

export default App
