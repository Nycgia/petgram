import { useState, useEffect } from 'react'
import NProgress from 'nprogress'

export const useCategoriesData = () => {
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
