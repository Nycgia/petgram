import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'

export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </ul>
  )
}
