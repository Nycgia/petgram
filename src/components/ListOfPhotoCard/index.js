import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </ul>
  )
}

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent)
