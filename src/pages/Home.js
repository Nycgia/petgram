import React from 'react'
import { ListOfCategory } from '../components/ListOfCategory'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategory />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
