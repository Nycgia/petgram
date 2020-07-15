import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import NProgress from 'nprogress'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    NProgress.start()
    window.fetch('https://petgram-server-peter.nycgia.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        NProgress.done()
      })
  }, [])

  return { categories }
}

export const ListOfCategory = () => {
  const {categories} = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY >= 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
