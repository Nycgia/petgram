import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'
import PropTypes from 'prop-types'

export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </ul>
  )
}

ListOfPhotoCardComponent.propTypes = {
  data: PropTypes.object
}
