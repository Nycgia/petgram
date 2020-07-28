import React from 'react'
import { GetFavorites } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout title='Favoritos'>
      <GetFavorites />
    </Layout>
  )
}
