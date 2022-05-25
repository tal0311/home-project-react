import React from 'react'
import { FavoritesPreview } from './favoritesPreview'

export const FavoritesList = ({ favorites }) => {
  return (
    <>
      <section className='favorite-list'>



        {favorites && favorites.map((fav) => <FavoritesPreview fav={fav} />)}
      </section>
    </>
  )
}
