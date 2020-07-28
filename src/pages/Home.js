import React from 'react'
import { ListOfCategory } from '../components/ListOfCategory'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con Petgram puedes encontrar fotos de animales muy bonitos'
    >
      <ListOfCategory />
      <ListOfPhotoCard categoryId={id} />
    </Layout>
  )
}
